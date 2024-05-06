import Title from "../common/Title"

const introduceText = "안녕하세요. 3년차 프론트엔드 개발자 ‘최우진’ 입니다.\n\n협업을 위해 이해하고 배려하며 여러 사람과 소통하기를 좋아하고, 긍정적으로 생각하며 유연한 사고로 작업하는 것을 즐깁니다.\n하고싶은 것은 꼭 해야하는 성향 덕분에 새로운 것을 알아가는 과정은 늘 즐겁습니다.\n 그래서 항상 다양한 학습과 경험으로 성장해 나가는 개발자가 되도록 노력하고있습니다."

const Introduce = () => {
    return (
        <div>
            <Title title="Introduce" size="L"/>
            <div className="whitespace-pre-line px-1 py-3.5 text-base">
                {introduceText}
            </div>
        </div>
    )
}

export default Introduce