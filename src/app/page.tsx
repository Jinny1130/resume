import "@/styles/resume.scss";
import Header from '@/components/common/Header';
import ContactAndSkill from '@/components/section/ContactAndSkill'

export default function Home() {
    return (
        <div>
            <Header />
            <div className="resume-wrap max-w-4xl pt-24 px-3 mx-auto">

                <div className="name-wrap flex items-center w-full">
                    <i className="block w-2 h-12 bg-sky-200 mr-1.5"/>
                    <div className="flex items-end">
                        <p className="font-semibold text-4xl mr-1.5">최우진</p>
                        <p className="text-xl mr-1.5">Woojin Choi</p>
                    </div>
                </div>

                <ContactAndSkill />
            </div>
        </div>
    );
}