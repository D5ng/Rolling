import { Link } from "react-router-dom"
import Button from "@shared/ui/Button"
import Badge from "@shared/ui/Badge"

export default function MainPage() {
  return (
    <>
      <section className="bg-surface p-6 flex flex-col gap-[50px] rounded-[20px] mt-[42px] md:mt-[49px] xl:mt-[60px] md:p-10 xl:flex-row xl:justify-between xl:p-16 xl:max-w-[1200px] xl:mx-auto">
        <div>
          <Badge variant="primary">Point. 01</Badge>
          <h2 className="text-lg font-bold pt-4 pb-1 md:text-2xl md:pb-2">
            누구나 손쉽게, 온라인 <br className="hidden xl:block" />
            롤링 페이퍼를 만들 수 있어요
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">로그인 없이 자유롭게 만들어요.</p>
        </div>
        <picture className="w-[calc(100vw-40px)] -translate-x-[24px] xl:w-[720px] xl:flex xl:justify-center">
          <source media="(min-width: 768px)" srcSet="/main-point1-tablet.png" />
          <img src="/main-point1-mobile.png" alt="앱 구성 이미지" className="xl:w-[640px] xl:block" />
        </picture>
      </section>
      <section className="mt-6 bg-surface p-6 flex flex-col gap-[50px] rounded-[20px] md:p-10 md:mt-8 xl:flex-row xl:justify-between xl:p-16 xl:max-w-[1200px] xl:mx-auto">
        <div>
          <Badge variant="primary">Point. 02</Badge>
          <h2 className="text-lg font-bold pt-4 pb-1 md:text-2xl md:pb-2">
            서로에게 이모지로 감정을 <br className="hidden xl:block" /> 표현해보세요
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
        <picture className="flex justify-center items-center xl:w-[720px]">
          <source media="(min-width: 768px)" srcSet="/main-point2-tablet.png" />
          <img src="/main-point2-mobile.png" className="xl:w-[420px] xl:block" alt="앱 구성 이미지" />
        </picture>
      </section>

      <div className="py-6 xl:py-12 xl:mt-0 xl:flex xl:justify-center">
        <Button asChild className="w-full h-[56px]">
          <Link to="/list">구경해보기</Link>
        </Button>
      </div>
    </>
  )
}
