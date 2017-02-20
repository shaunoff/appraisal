import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import HomeProgress from '../components/appraisal/HomeProgress.js'
import HomePie from '../components/appraisal/HomePie.js'
import { Line, Circle } from 'rc-progress';

const warning = "#fa7606"
const manager = "#6bada7"
const primary = "#007681"
const New = ({user}) => {


	return (
  <div style={{display: 'flex',  flexWrap:'wrap',fontWeight: '700', padding: '22px'}}>

      <div style={{flex: '3', display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px', background: "white",minWidth: '90%'}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Appraisal Progress
          </div>

          <div style={{display: 'flex'}}>

            <div style={{flex: "3",display: 'flex',flexDirection: 'column', justifyContent:'center',marginRight: '20px'}}>

							<HomeProgress stage={user[0].stage}/>


            </div>
						<div>
							<HomePie stage={user[0].stage}/>
						</div>


        </div>
      </div>



      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Recent Activity

          </div>

					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: manager, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>RG</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: manager,padding:"10px"}}>
               Roger Goudreau
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: manager, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>JG</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: manager,padding:"10px"}}>
               Jan Guy
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Final Approval
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>
					<div style={{display: 'flex', alignItems: 'center', margin: '10px',marginBottom: '5px',border: '1px solid #ccc',
						borderRadius: '4px', height: '40px'}}>
            <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: primary, color: 'white'}}>

                <div style={{ fontSize: '14px',color: 'white'}}>SH</div>

            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: primary,padding:"10px"}}>
               You
            </div>
            <div style={{flex: '1', fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               Approved Appraisal
            </div>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              14 Jan
            </div>
          </div>

      </div>
      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Completed Appraisals

          </div>

          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '90px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2016
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "12px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.2</span></div>
               <Line style={{marginBottom: '10px'}} percent="76" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
               <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.6</span></div>
              <Line style={{marginBottom: '10px'}} percent="82" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
            </div>
            <div style={{padding:"10px"}}>
              <img style={{ width: '40px'}} src="/icons/pdf.svg"/>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc',borderLeft: "6px solid #6bada7", height: '80px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               2015
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "12px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.6</span></div>
               <Line style={{marginBottom: '10px'}} percent="82" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
               <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.1</span></div>
              <Line style={{marginBottom: '10px'}} percent="74" trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
            </div>
            <div style={{padding:"10px"}}>
              <img style={{ width: '40px'}} src="/icons/pdf.svg"/>
            </div>
          </div>





      </div>
      <div style={{flex: '1',display: 'flex',flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px', marginLeft: '11px', background: "white"}}>
          <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Useful Links

          </div>

          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '40px'}} src="/icons/question.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Instructions
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Appraisal Policy
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>
          <div style={{display: 'flex', alignItems: 'center', margin: '10px',border: '1px solid #ccc', borderRadius: '4px'}}>

            <div style={{fontSize: "16px", fontWeight: '700', color: '#585858',padding:"10px"}}>
               <img style={{ width: '30px', marginRight: '10px'}} src="/icons/pdf.svg"/>
            </div>
            <div style={{flex: '2', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
                Staff Handbook
            </div>
            <div style={{textAlign: 'center',flex: '1', display: 'flex', flexDirection: "column", fontSize: "14px", fontWeight: '700', background: '#6bada7',color: 'white',margin:"10px",padding: "10px"}}>
                Download
            </div>

          </div>





      </div>
  </div>
	)
}

export default New;
