import { AppWrapper } from '@/components/shared/AppSetup/AppWrapper'
import React from 'react'
import { SuperAdminHeader } from '../../SuperAdminHeader'
import { Timeline } from './Timeline';
import { ProjectInformation } from './ProjectInformation';

const milestones = [
    {
      title: 'Land Aquistition',
      status: 'Complete',
      date: '15/02/2024',
      completed: true
    },
    {
      title: 'Site Planning',
      status: 'Complete', 
      date: '01/03/2024',
      completed: true
    },
    {
      title: 'Permitting',
      status: 'Complete',
      date: '15/03/2024',
      completed: true
    },
    {
      title: 'Groundbreaking Ceremony',
      status: 'Complete',
      date: '01/04/2024',
      completed: true
    },
    {
      title: 'Foundation Work',
      status: 'Complete',
      date: '15/05/2024',
      completed: true
    },
    {
      title: 'Framing',
      status: 'Complete',
      date: '01/07/2024',
      completed: true
    },
    {
      title: 'Roofing',
      status: 'Complete',
      date: '15/08/2024',
      completed: true
    },
    {
      title: 'Final Inspection',
      status: 'Complete',
      date: '01/09/2024',
      completed: true
    }
  ];

export const ProjectDetailIndex = () => {
  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className='px-4'>
      
      {/* Project information and Project Timeline */}
      <div className='flex justify-between flex-wrap gap-3'>
        <ProjectInformation />
      <Timeline milestones={milestones} />
      </div>
      </div>
      </AppWrapper>
  )
}
