import { fontBitter, spaceMonoHeavy } from "@/app/layout";

export default function Output(){
    return(
        <section className={`${spaceMonoHeavy.className} flex flex-col w-full h-120`}>
            <label htmlFor="input" className="h-fit">
                <h4 className="flex flex-col gap-2 h-fit text-2xl p-4">
                    Enter Inputs comma seperated :
                    <p className={`${fontBitter.className} font-light`}>(If any with comma)</p>
                </h4>
            </label>
            <textarea name="input" id="input" placeholder="1,2,3..." rows={2} cols={30} className="areaText"/>
        </section>
    )
}