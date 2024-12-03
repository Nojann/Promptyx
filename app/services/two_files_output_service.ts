import FileService from '#services/file_service'
import OpenAIService from '#services/openai_service'
import Output from '#models/output'
import Prompt from '#models/prompt'

const fileService = new FileService()

export default async function twoFilesOutputService(prompt: Prompt) {
    console.log('twoFilesOutputService')

    if (!prompt.context) {
        throw new Error('Context is required for twoFilesOutputService')
    }

    if (!prompt.context.filePath) {
        throw new Error('FilePath is required in context for twoFilesOutputService')
    }

    const contextContent = await fileService.readFile(prompt.context.filePath)
    prompt.context.contextData = contextContent

    const openaiService = new OpenAIService()
    const outputContent = await openaiService.generateOutput(contextContent, prompt.instruction)

    const lastSlashIndex = prompt.context.filePath.lastIndexOf('/')
    const filePath = prompt.context.filePath.substring(0, lastSlashIndex)
    const fileName = prompt.context.filePath.substring(lastSlashIndex + 1)
    await prompt.context.save()

    const output = await Output.create({
        outputContent: outputContent,
        outputType: 'FILE',
        filePath: `${filePath}/new_${fileName}`,
        fileMimeType: null,
        promptId: prompt.id
    })
    await output.save()

    console.log('-----------')
    console.log(outputContent)
    console.log('-----------')

    if (!outputContent || !outputContent.includes('=====')) {
        throw new Error('Invalid output format: Output must contain HTML and CSV parts separated by =====')
    }

    const parts = outputContent.split('=====')
    if (parts.length !== 2) {
        throw new Error('Invalid output format: Expected exactly two parts (HTML and CSV) separated by =====')
    }

    const [htmlPart, csvPart] = parts
    const cleanedHtml = htmlPart.trim()
    const cleanedCsv = csvPart.trim()

    await fileService.writeFile(`${filePath}/new_${fileName}.html.twig`, cleanedHtml)
    await fileService.writeFile(`${filePath}/new_${fileName}.csv`, cleanedCsv)
}