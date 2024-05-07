'use client'

import "@/styles/resume.scss";
import Header from '@/components/common/Header';
import NameWrap from "@/components/section/NameWrap";
import ContactAndSkill from '@/components/section/ContactAndSkill'
import Introduce from "@/components/section/Introduce";
import Career from "@/components/section/Career";
import WorkExperience from "@/components/section/WorkExperience";
import SideProject from "@/components/section/SideProject";
import Footer from '@/components/common/Footer';
import { useEffect, useState } from "react"

export default function Home() {
    const [isMobile, setIsMobile] = useState('pc');

    useEffect( () => {

        function setHeaderShadow() {
            if (window.scrollY === 0) {
                document.querySelector('#header')?.classList.remove('shadow')
            }
            else {
                document.querySelector('#header')?.classList.add('shadow')
            }
        }

        function handleResize() {
            setIsMobile(window.innerWidth < 640 ? 'mo' : 'pc'); // 640px 미만은 모바일로 간주
        }

        // 초기 width 사이즈 확인
        handleResize();

        window.addEventListener('scroll', setHeaderShadow);
        window.addEventListener('resize', handleResize);

        // 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('scroll', setHeaderShadow);
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return (
        <div>
            <Header />

            <div className="resume-wrap max-w-4xl pt-24 px-6 mx-auto sm:px-3">
                <NameWrap />
                <ContactAndSkill />
                <Introduce isMobile={isMobile} />
                <Career isMobile={isMobile} />
                <WorkExperience />
                <SideProject />
            </div>

            <Footer isMobile={isMobile} />
        </div>
    );
}