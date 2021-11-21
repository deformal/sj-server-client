import { dirname } from "path"
import { fileURLToPath } from "url"
const fileUrl = import.meta.url
const filename = fileURLToPath(fileUrl)
export const __dirname = dirname(filename)
