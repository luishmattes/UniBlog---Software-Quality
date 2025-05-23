import { minioClient } from '../lib/minio';
import { randomUUID } from 'crypto';
import path from 'path';

export async function uploadToMinio(file: Buffer, originalName: string): Promise<string> {
    const bucket = 'uniblog';
    const fileName = `${randomUUID()}-${originalName}`;

    const exists = await minioClient.bucketExists(bucket);
    if (!exists) await minioClient.makeBucket(bucket);

    await minioClient.putObject(bucket, fileName, file);

    return `http://localhost:9000/${bucket}/${fileName}`;
}
