import Logo from '../../assets/logo.svg?react'
import Leave from '../../assets/leave.svg?react'
import Analysis from '../../assets/analysis.svg?react'
import Search from '../../assets/search.svg?react'
import Resume from '../../assets/resume.svg?react'
import Training from '../../assets/training.svg?react'
import Interview from '../../assets/interview.svg?react'
import Recommendation from '../../assets/recommendation.svg?react'
import useMediaQuery from '../../hooks/useMediaQuery.ts'
import PaginatedServices from '../../components/Pagination/PaginatedServices.tsx'
import './App.css'

function App() {
    const isMobile = useMediaQuery('(max-width: 768px)')
    
    const services = [
        { title: 'Анализ текущего состояния карьеры', subTitle: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.', icon: <Analysis /> },
        { title: 'Поиск работы', subTitle: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.', icon: <Search /> },
        { title: 'Сопроводительные письма и резюме', subTitle: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства. ', icon: <Resume /> },
        { title: 'Тренинг по презентации личного бренда', subTitle: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.', icon: <Training /> },
        { title: 'Подготовка к собеседованию', subTitle: 'Научим говорить о себе кратко, ярко и профессионально.', icon: <Interview /> },
        { title: 'Рекомендации по базе STEMPS Career', subTitle: 'Поможем встретиться соискателюи работодателю. ', icon: <Recommendation /> },
    ]
    
  return (
      <div className="flex flex-col text-[#151515]">
          <div className="p-4 flex flex-row border-y border-solid border-[#E1E1E1]flex justify-between">
              <div className={'flex flex-row gap-4'}>
                  <Logo />

                  {!isMobile && (<div>STEMPS</div>)}
              </div>

              {!isMobile ? (
                  <>
                      <div className="flex space-x-4">
                          <div className="flex flex-row gap-6 ">
                              <div>О школе</div>

                              <div>Курсы</div>

                              <div>Библиотека</div>
                          </div>
                      </div>

                      <div className="flex flex-row gap-4">
                          <div>Вход</div>

                          <Leave/>
                      </div>
                  </>
              ) : (
                  <div
                      className={'bg-[#121212] rounded-b rounded-t pl-2 pr-2 pt-1 pb-1 content-center text-xs text-[#F3F3F3]'}>
                      Меню
                  </div>
              )}
          </div>

          <div className="flex flex-col p-4 gap-10">
              {isMobile ? (
                  <div className={'flex flex-col text-[26px] text-left text-[#A59DFF]'}>
                          <div>1.0</div>

                          <hr className="relative border-t border-[#D1D1D1]"/>

                          <div>Наши услуги</div>
                  </div>
              ) : (
                  <div className={'flex flex-col'}>
                      <div className="flex flex-row pb-3 justify-between text-4xl text-[#A59DFF]">
                          <div>1.0</div>

                          <div className="whitespace-nowrap w-[280px] text-left">Наши услуги</div>

                          <div/>
                      </div>

                      <hr className="relative border-t border-[#D1D1D1]"/>
                  </div>
              )}

              {isMobile ? (
                  <PaginatedServices services={services}/>
              ) : (
                  <div className="flex flex-row gap-4 overflow-x-auto overscroll-contain">
                      {services.map((service, index) => (
                          <div
                              key={index}
                              className="min-w-[364px] bg-[#F0F0F0] rounded-b-lg rounded-t-lg flex flex-col p-6 gap-14 text-2xl"
                          >
                              <div>
                                  {service.icon}
                              </div>
                              <div className="text-left">
                                  {service.title}
                              </div>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </div>
  )
}

export default App
