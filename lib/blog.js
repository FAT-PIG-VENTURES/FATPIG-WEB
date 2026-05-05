import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostBySlug(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data,
    content,
  }
}

const jobsDirectory = path.join(process.cwd(), 'content/careers/jobs')
const internshipsDirectory = path.join(process.cwd(), 'content/careers/internships')

function getMDXFiles(directory) {
  try {
    const fileNames = fs.readdirSync(directory)
    const data = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(directory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id: slug,
        slug,
        ...matterResult.data,
      }
    })
    return data
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error)
    return []
  }
}

export function getAllJobs() {
  return getMDXFiles(jobsDirectory)
}

export function getAllInternships() {
  return getMDXFiles(internshipsDirectory)
}
