import Title from "../common/Title"

const careerText = "간편결제 통합솔루션 사업을 주력으로 비대면 결제 서비스인 “결제선생” 을 운영하는 페이민트에서 근무했습니다.\n결제선생의 ‘매니저사이트’, ‘간편결제 청구서’  페이지(Front Office Page)의 유지보수 업무를 하였습니다.\n또한 해당 서비스 관리에 필요한 어드민(Back Office Page) 구축, 유지 보수하며 프론트엔드 기능 개발리드를 한 경험이 있습니다."

const Career = () => {
    return (
        <div>
            <Title title="Career" size="L"/>
            <div className="whitespace-pre-line px-1 py-3.5 text-base">
                <div className="w-full flex items-center justify-between">
                    <p>(주) 페이민트</p>
                    <p>2021.08.02 ~ ( 재직중 )</p>
                </div>
                <p className="py-3 text-base">{ careerText }</p>
            </div>
        </div>
    )
}

export default Career