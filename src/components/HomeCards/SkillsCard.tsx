const skills = ["Python & Backend", "SQL", "Typescript", "React + Tailwind", "Git Tooling"]


function SkillsCard() {
    return (
        <div className="relative h-full w-[95%] flex flex-col top-3 left-5">
            <h1 className="text-5xl text-white mb-3 font-bold ">I have skills in<span className="animate-cursor">...</span></h1>
            {skills.map((v) => <div className="flex flex-row gap-2 ml-4">
            <div className="rounded-full h-3 w-3 bg-white mt-4"/>
            <p className="text-3xl text-white text-left mb-5 font-bold">{v}</p>
            </div>)}
        </div>
    )
}


export default SkillsCard