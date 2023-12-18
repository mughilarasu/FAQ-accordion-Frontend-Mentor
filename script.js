let data = [{
    title: "What is Frontend Mentor, and how will it help me?",
    details: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    open: true,
}, {
    title: "Is Frontend Mentor free?",
    details: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    open: false,
}, {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    details: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",open: false,
}, {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    details: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    open: false,
}]

const accordionId = document.querySelector('#accordionId');
const changeStatus = (index) => {
    const newData = data.map((item, i) => {
        if (i === index) {
            return {
                ...item,
                open: !item.open,
            };
        }else{
            return {
                ...item,
                open: false,
            };  
        }
    });
    data = newData;
    renderAccordion();
};

const renderAccordion = () => {
    const accordionData = data.map((d, i) => {
        return `<div>
            <div style="display:flex;justify-content: space-between;cursor:pointer" onClick="changeStatus(${i})">
                <h3 class="accordian-title">${d.title}</h3>
                    <img src="${d.open ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg'}" alt="${d.open ? 'icon-minus' : 'icon-plus'}"/>
            </div>
            <div>${d.open ? `<p style="font-weight:400;color:grey;font-size:14px">${d.details}</p>` : ''}
            </div>
            ${i===data.length-1?'':'<div style="height:0.5px;width:100%;background-color:hsl(275, 100%, 97%)"/>'}
        </div>`;
    });

    accordionId.innerHTML = accordionData.join('');
};

// Initial rendering
renderAccordion();