import React from 'react'
import Layout from '../../../../Component/Layout'
import ProfilePekerjaLayout from '../../../../Layout/profile-pekerja-edit'

export async function getServerSideProps(context) {
  const employees = await fetch(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/employees/${context.params.id}`)
  const dataEmployees = await employees.json()
  const skill = await fetch(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/skill/${context.params.id}`)
  const dataSkill = await skill.json()
  return {
    props: {
      employees: dataEmployees.data,
      skill: dataSkill.data
    }
  }
}

const edit = ({employees, skill}) => {
  return (
    <Layout>
         <ProfilePekerjaLayout employees={employees} skill={skill}/>
    </Layout>
  )
}

export default edit