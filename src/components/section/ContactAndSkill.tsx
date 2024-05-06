import Image from "next/image"
import Title from '@/components/common/Title';

const ContactAndSkill = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="myself-image w-1/3 h-auto rouded-full mr-20">
                {/* <Image src="/wj.png" alt="내사진" width={100} height={100} className="w-full h-auto" /> */}
            </div>

            <div className="w-2/3">
                
                <Title title="Contact & Channel" size="s" />
                <div className="px-1 py-2">
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>
                            Phone
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 hover:underline" href="sms:050-6602-1642">050-6602-1642</a>
                    </div>
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>
                            Email
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 hover:underline" href="mailto:cwjin94@gmail.com">cwjin94@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>
                            Github
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 hover:underline" href="https://github.com/jinny1130" target="_blank">https://github.com/jinny1130</a>
                    </div>
                </div>

                <div className="flex items-start pt-4">
                    <div className="w-1/2">
                        <Title title="Tech Stack" size="s" />
                        <div className="w-full text-sm px-1 py-2">
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Vue, Vuex
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Javascript
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Html, CSS, SCSS
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>React, Next.js
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Typescript
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <Title title="Used Tool" size="s" />
                        <div className="w-full text-sm px-1 py-2">
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Git, Github, GitLab
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>VSCode, WebStorm
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Figma, Slack, Monday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAndSkill