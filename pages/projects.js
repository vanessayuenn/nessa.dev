import Layout from '../components/layout'
import { PROJECTS } from '../lib/constants'
import { useState, useEffect } from 'react'
import uniq from 'lodash.uniq'
import classnames from 'classnames'

const projectsByYear = PROJECTS.sort((a, b) => a.when[0] < b.when[0])
const allRoles = uniq(PROJECTS.reduce((arr, { role }) => [...arr, ...role], []))

export default function Work () {
  const [projects, setProjects] = useState(projectsByYear)
  const [filters, setFilters] = useState(
    // convert array to key/value pair: {filter1: true, ...}
    allRoles.reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
  )

  useEffect(() => {
    const filtered = projectsByYear.filter(proj => proj.role.some(role => filters[role]))
    setProjects(filtered)
  }, [filters])

  const toggleFilter = (role) => {
    setFilters({ ...filters, [role]: !filters[role] })
  }

  return (
    <>
      <Layout titlePrefix='Selected Work'>

        <div className='text-center'>
          <h1 className='my-4 text-lg'>I like wearing many hats.</h1>
          <div className='my-8'>
            {allRoles.map((role, id) => {
              const active = filters[role]
              return (
                <span
                  key={`filter-${id}`}
                  className={classnames(
                    'inline-block font-display cursor-pointer text-base md:text-xl px-3 mx-1 my-1 py-2 border-red border-2 text-red bg-red hover:bg-opacity-50',
                    { 'bg-red text-light hover:text-red': active },
                    { 'bg-light text-red hover:bg-red': !active }
                  )}
                  onClick={() => toggleFilter(role, active)}
                >{role} 🎩
                </span>
              )
            })}
          </div>
        </div>

        <table className='table-fixed container mt-6 md:mt-12'>
          <thead className='border-b-2 border-t-2 bg-red bg-opacity-25 text-red lowercase font-display text-sm md:text-base'>
            <tr>
              <th className='px-2 md:px-4 py-2 text-left w-1/4 md:w-32'>When</th>
              <th className='px-2 md:px-4 py-2 text-left w-1/2 md:w-8/12'>What</th>
              <th className='px-2 md:px-4 py-2 text-left'>How</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, id) => (
              <tr className='align-top' key={`proj-${id}`}>
                <td className='border-b-2 border-red px-2 md:px-4 py-2 text-sm md:text-base'>{proj.when.join(', ')}</td>
                <td className='border-b-2 border-red px-2 md:px-4 py-2'>
                  <div className='text-lg'>
                    <a href={proj.link} className='hover:text-red hover:underline'>{proj.title}</a>
                  </div>
                  <div className='font-display lowercase text-xs'>
                    {proj.where.reduce((acc, x) => acc === null ? x : <>{acc} <br /> {x}</>, null)}
                  </div>
                </td>
                <td className='border-b-2 border-red px-2 md:px-4 py-2 text-sm md:text-base'>{proj.role.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  )
}
