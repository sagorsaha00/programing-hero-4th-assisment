const DEMOJOBDATA = [
    {
        "id": 1,
        "company": "Mobile First Corp",
        "initial": "M",
        "role": "React Native Developer",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$130,000 - $175,000",
        "status_class": "badge-info",
        "description": "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        "id": 2,
        "company": "Pixel Perfect",
        "initial": "P",
        "role": "Senior UI Engineer",
        "location": "New York, NY",
        "type": "Contract",
        "salary": "$90 - $120 / hr",
        "status_class": "badge-success",
        "description": "Focus on design systems and high-fidelity component libraries using Tailwind CSS and DaisyUI."
    },
    {
        "id": 3,
        "company": "CloudScale AI",
        "initial": "C",
        "role": "Full Stack Architect",
        "location": "Hybrid",
        "type": "Full-time",
        "salary": "$160,000 - $210,000",
        "status_class": "badge-error",
        "description": "Lead the transition from monolithic architecture to micro-frontends using Next.js and Node.js."
    },
    {
        "id": 4,
        "company": "DataFlow Systems",
        "initial": "D",
        "role": "Frontend Developer",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$110,000 - $145,000",
        "status_class": "badge-warning",
        "description": "Creating data-intensive dashboards and real-time visualization tools for enterprise clients."
    },
    {
        "id": 5,
        "company": "GreenTech Solutions",
        "initial": "G",
        "role": "React Native Lead",
        "location": "Austin, TX",
        "type": "Full-time",
        "salary": "$150,000 - $190,000",
        "status_class": "badge-info",
        "description": "Architecting mobile solutions for renewable energy monitoring and IoT integration."
    },
    {
        "id": 6,
        "company": "FinStream",
        "initial": "F",
        "role": "Mobile Engineer",
        "location": "London, UK",
        "type": "Full-time",
        "salary": "£85,000 - £110,000",
        "status_class": "badge-secondary",
        "description": "Develop secure, high-performance financial trading applications for iOS and Android."
    },
    {
        "id": 7,
        "company": "SwiftLogistics",
        "initial": "S",
        "role": "Junior Web Developer",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$75,000 - $95,000",
        "status_class": "badge-info",
        "description": "Support the maintenance of our internal routing portals and driver-facing web apps."
    },
    {
        "id": 8,
        "company": "Nova Interactive",
        "initial": "N",
        "role": "Game UI Developer",
        "location": "San Francisco, CA",
        "type": "Full-time",
        "salary": "$140,000 - $180,000",
        "status_class": "badge-success",
        "description": "Bridging the gap between game engines and web technologies for in-game interfaces."
    },
    {
        "id": 9,
        "company": "HealthBridge",
        "initial": "H",
        "role": "Product Engineer",
        "location": "Remote",
        "type": "Part-time",
        "salary": "$60,000 - $80,000",
        "status_class": "badge-warning",
        "description": "Helping build patient-first telehealth experiences with React and Capacitor."
    },
    {
        "id": 10,
        "company": "Vantage Point",
        "initial": "V",
        "role": "Lead App Developer",
        "location": "Toronto, ON",
        "type": "Full-time",
        "salary": "$135,000 - $165,000",
        "status_class": "badge-info",
        "description": "Spearheading the mobile transformation for national retail supply chains."
    }
]


const jobLIst = document.getElementById("job-list");
const jobDatalenght = document.getElementById("jobDatalenght");
const interviewBtn = document.getElementById("interviewbtn");
const rejectedBtn = document.getElementById("rejectedbtn");
const interviewDatalenght = document.getElementById("interviewDatalenght");
const rejectedDatalenght = document.getElementById("rejectedDatalenght");



const interviewButton = document.getElementById("arrayinterviewBtn");
const rejectedButton = document.getElementById("arrayrejectedBtn");
const outOflength = document.getElementById("outOfData");






let AllDataShowInFrontTab = 'all';
const TotalData = [DEMOJOBDATA];
const allInterviewData = [];
const allRejectedData = [];





window.onload = () => {
    AllDataShowInFrontTab = 'all';
    renderDisplayData(TotalData[0]);
    updateLengthData();
}


function renderDisplayData(data) {
    const listContainer = jobLIst;
    if (data.length === 0) {
        listContainer.innerHTML = `<div class="card bg-base-100 card-border flex bg-base-100 w-2/3 mx-auto mt-10 sm:w-3/4">
        <figure>
            <img src="jobs.png" alt="Shoes" />
        </figure>
        <div class="text-body items-center text-center card-body">
            <h1 class="text-[22px] font-bold text-[#0f2d52]">No Jobs Available</h1>
            <h4 class="text-[18px] font-medium text-[#0f2d52]">Check back soon for new job opportunities</h4>
        </div>
       </div>`;
        return;
    } else {
        const jobDataShow = data.map((job) => {
            return `
      <ul class="w-full md:w-3/4 lg:w-3/4 mx-auto my-6">

      <li id="${job.id}" 
      class="relative list-row bg-base-100 shadow-md border border-base-200 rounded-box p-6 list-none">
 
      <button 
      onclick="deleteJob(${job.id})"
      class="btn btn-circle btn-sm   border-none text-white 
     absolute top-3 right-3 shadow-md hover:scale-110 transition duration-200">
  
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
    </svg>
    </button>

      <div class="flex-1">

          <h2 class="text-xl font-bold text-[24px]">${job.company}</h2>
          <p class="text-slate-500 text-[20px] font-medium">${job.role}</p>

          <div class="flex flex-wrap gap-2 text-[18px] text-slate-400 my-3 font-medium">
              <span>${job.location}</span>
              <span>•</span>
              <span>${job.type}</span>
              <span>•</span>
              <span>${job.salary}</span>
          </div>
       
          ${job.status ? `
     <button   class="btn btn-sm text-white
     ${job.status === "Interviewing" ? "bg-green-500 hover:bg-green-600" : ""}
      ${job.status === "Rejected" ? "bg-red-500 hover:bg-red-600" : ""}
      rounded-[4px] mb-3 ml-[6px] border-none">
    
  
  ${job.status}  

</button> 
` : ''}

          <p class="text-slate-600 mb-6 text-[18px] font-medium">
              ${job.description}
          </p>

          <div class="flex flex-wrap gap-2">
              <button onclick="GetIdbyButton(${job.id}, 'interviewBtn')" 
                class="btn btn-outline btn-success btn-sm h-[40px] px-6 text-[18px]">
                INTERVIEW
              </button>

              <button onclick="GetIdbyButton(${job.id}, 'rejectedBtn')" 
                class="btn btn-outline btn-error btn-sm px-6 text-[18px] h-[40px]">
                REJECTED
              </button>
          </div>

      </div>
  </li>
</ul>
`;
        });
        listContainer.innerHTML = jobDataShow.join('');

    }

}



function updateLengthData() {
    const total = TotalData[0].length;
    const interviewData = allInterviewData.length;
    const rejectedData = allRejectedData.length;
    const jobs = total - interviewData - rejectedData;
    jobDatalenght.innerText = jobs;
    interviewDatalenght.innerText = interviewData;
    rejectedDatalenght.innerText = rejectedData;
    if (AllDataShowInFrontTab === 'all') {
        outOflength.innerText = ` ${jobs} of ${total} Jobs`;
    } else if (AllDataShowInFrontTab === 'interview') {
        outOflength.innerText = ` ${interviewData} of ${total} Jobs`;
    } else if (AllDataShowInFrontTab === 'rejected') {
        outOflength.innerText = ` ${rejectedData} of ${total} Jobs`;
    }
}


function GetIdbyButton(jobId, buttonName) {
    const jobData = TotalData[0].find(job => job.id === jobId);
    if (buttonName === "interviewBtn") {
        jobData.status = "Interviewing";
        allInterviewData.push(jobData);

    } else if (buttonName === "rejectedBtn") {
        jobData.status = "Rejected";
        allRejectedData.push(jobData);
    }
    updateLengthData();
    if (AllDataShowInFrontTab === 'all') {
        renderDisplayData(TotalData[0]);
    } else if (AllDataShowInFrontTab === 'interview') {
        renderDisplayData(allInterviewData);
    } else if (AllDataShowInFrontTab === 'rejected') {
        renderDisplayData(allRejectedData);
    }

}

function showTabByData(event, type) {
    const tabs = document.querySelectorAll('.header-btn');
    tabs.forEach(tab => {
        tab.classList.remove('header-btn-active');
        tab.style.backgroundColor = "";
        tab.style.color = "";
    });
    const headerbutton = event.target;
    headerbutton.classList.add('header-btn-active');
    headerbutton.style.backgroundColor = "#4ade80";
    headerbutton.style.color = "black";

    AllDataShowInFrontTab = type;
    let dataToShow;
    if (type === 'all') {
        dataToShow = TotalData[0];
    } else if (type === 'interview') {
        dataToShow = allInterviewData;
    } else if (type === 'rejected') {
        dataToShow = allRejectedData;
    }

    updateLengthData();
    renderDisplayData(dataToShow);
}
function removeDataFromInterViewData(arr, jobId) {
    const index = arr.findIndex(job => job.id === jobId);
    arr.splice(index, 1);
}
function deleteJob(id) {
    const JobDataFromList = TotalData[0].findIndex(jobData => jobData.id === id);
    TotalData[0].splice(JobDataFromList, 1);
    removeDataFromInterViewData(allInterviewData, id);
    removeDataFromInterViewData(allRejectedData, id);
    updateLengthData();
    var renderData;
    if (AllDataShowInFrontTab === 'interview') {
        renderData = allInterviewData;
    } else if (AllDataShowInFrontTab === 'rejected') {
        renderData = allRejectedData;
    } else {
        renderData = TotalData[0];
    }
    renderDisplayData(renderData);
}
function main() {
    const defaultBtn = document.getElementById("default-btn");
    defaultBtn.classList.add('header-btn-active');
    defaultBtn.style.backgroundColor = "#4ade80";
    deleteJob()
    GetIdbyButton()
    renderDisplayData(TotalData);
}

main()