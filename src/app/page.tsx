import "@/styles/resume.scss";
import Header from '@/components/common/Header';
import NameWrap from "@/components/section/NameWrap";
import ContactAndSkill from '@/components/section/ContactAndSkill'
import Introduce from "@/components/section/Introduce";
import Career from "@/components/section/Career";
import WorkExperience from "@/components/section/WorkExperience";
import SideProject from "@/components/section/SideProject";
import Footer from '@/components/common/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            
            <div className="resume-wrap max-w-4xl pt-24 px-6 mx-auto sm:px-3">
                <NameWrap />
                <ContactAndSkill />
                <Introduce />
                <Career />
                <WorkExperience />
                <SideProject />
            </div>

            <Footer />
        </div>
    );
}