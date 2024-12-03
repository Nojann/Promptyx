import { promises as fs } from 'fs';
import path from 'path';

export default class FileService {
  async readFile(filePath: string): Promise<string> {
    try {
      const absolutePath = path.resolve(filePath);
      const data = await fs.readFile(absolutePath, 'utf-8');
      return data;
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  async fileExists(filePath: string): Promise<boolean> {
    try {
      const absolutePath = path.resolve(filePath);
      await fs.access(absolutePath);
      return true;
    } catch {
      return false;
    }
  }

  async writeFile(filePath: string, content: string): Promise<void> {
    const absolutePath = path.resolve(filePath);
    await fs.writeFile(absolutePath, content, 'utf-8');
  }
}
