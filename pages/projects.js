import Layout from '../components/layout'
import { PROJECTS } from '../lib/constants'
import { useState, useEffect } from 'react'
import classnames from 'classnames'

export default function Work () {
  const projectsByYear = PROJECTS.sort((a, b) => {
    if (a.pinned) return -1
    if (b.pinned) return 1
    return b.when[0] - a.when[0]
  })

  const [projects, setProjects] = useState(projectsByYear)
  const [filters, setFilters] = useState({
    code: true,
    product: true,
    manager: true,
    speaker: true,
    organizer: false
  })

  const allRoles = Object.keys(filters)

  useEffect(() => {
    const filtered = projectsByYear.filter(proj => proj.role.some(role => filters[role]))
    setProjects(filtered)
  }, [filters])

  const toggleFilter = (role) => {
    setFilters({ ...filters, [role]: !filters[role] })
  }

  const joinByBr = (arr) => arr.reduce(
    (acc, x) => acc === null ? x : <>{acc} <br /> {x}</>
    , null)

  return (
    <>
      <Layout titlePrefix='Selected Work'>
        <div className='text-center mt-10 md:mt-20'>
          <h1 className='my-4 md:my-8 text-xl md:text-2xl font-display'>Jack of all trades, Master of some.</h1>
          <h1 className='my-6'>I enjoy wearing many different hats:</h1>
          <div>
            {allRoles.map((role, id) => {
              const active = filters[role]
              return (
                <div
                  key={`filter-${id}`}
                  role='button'
                  className={classnames(
                    'inline-block font-display cursor-pointer text-sm md:text-lg px-3 mx-1 my-1 py-2 border-red border-2 text-red bg-red hover:bg-opacity-50',
                    { 'bg-red text-light hover:text-red': active },
                    { 'bg-light text-red hover:bg-red': !active }
                  )}
                  onClick={() => toggleFilter(role, active)}
                >{role} 🎩
                </div>
              )
            })}
          </div>
        </div>

        <table className='table-fixed w-full mt-6'>
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
                <td className='border-b-2 border-red px-2 md:px-4 py-2 text-sm md:text-base'>{joinByBr(proj.when)}</td>
                <td className='border-b-2 border-red px-2 md:px-4 py-2'>
                  <div className='text-lg'>
                    <a href={proj.link} className='hover:text-red hover:underline'>{proj.title}</a>
                  </div>
                  <div className='font-display lowercase text-xs'>
                    {joinByBr(proj.where)}
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
