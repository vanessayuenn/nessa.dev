import Layout from '../components/layout'
import Container from '../components/container'
import { PROJECTS } from '../lib/constants'
import classnames from 'classnames'

const sortProjects = () => PROJECTS.sort((a, b) => a.when[0] < b.when[0])

export default function Work() {
  const projects = sortProjects()

  return (
    <>
      <Layout titlePrefix={'Selected Work'}>
        <h1>Some of the projects I have worked on:</h1>

        <table className="table-auto container">
          <thead className="bg-red text-light lowercase font-display">
            <tr>
              <th className="px-2 md:px-4 py-2 text-left">When</th>
              <th className="px-2 md:px-4 py-2 text-left">What</th>
              <th className="px-2 md:px-4 py-2 text-left">How</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, id) => (
              <tr className="align-top">
                <td className="border-0 border-b-2 border-red px-2 md:px-4 py-2 text-sm md:text-base">{proj.when.join(', ')}</td>
                <td className="border-0 border-b-2 border-red px-2 md:px-4 py-2">
                  <div className="text-lg">
                    <a href={proj.link} className="hover:text-red hover:underline">{proj.title}</a>
                  </div>
                  <div className="font-display lowercase text-xs">
                    {proj.where.reduce((acc, x) => acc === null ? x : <>{acc} <br /> {x}</>, null)}
                  </div>
                </td>
                <td className="border-0 border-b-2 border-red px-2 md:px-4 py-2 text-sm md:text-base">{proj.role.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  )
}
