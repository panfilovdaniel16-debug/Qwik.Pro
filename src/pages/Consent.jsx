import LegalPage from './LegalPage'

function P({ children }) {
  return <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{children}</p>
}

function Li({ children }) {
  return (
    <li className="text-sm sm:text-base text-text-secondary leading-relaxed flex gap-2">
      <span className="text-text-tertiary mt-1 shrink-0">—</span>
      <span>{children}</span>
    </li>
  )
}

function Block({ num, title, purpose, data, subjects }) {
  return (
    <div className="mb-6 p-5 rounded-xl border border-border-neutral bg-emerald-dark/40">
      <h3 className="text-base font-semibold text-ivory mb-3">Категория {num}. {title}</h3>
      <div className="space-y-2 text-sm text-text-secondary">
        <p><span className="text-text-tertiary">Цель:</span> {purpose}</p>
        <p><span className="text-text-tertiary">Данные:</span> {data}</p>
        {subjects && <p><span className="text-text-tertiary">Субъекты:</span> {subjects}</p>}
      </div>
    </div>
  )
}

export default function Consent({ onBack }) {
  return (
    <LegalPage title="Согласие на обработку персональных данных" onBack={onBack}>
      <P>
        Настоящим я, являясь субъектом персональных данных, в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», даю своё согласие ИП Кешенеев Руфат Рустамович (ИНН 262308877507), именуемому далее «Оператор», на обработку моих персональных данных — на сбор, систематизацию, хранение, уточнение, использование, распространение, а также уничтожение — без каких-либо специальных условий и ограничений.
      </P>

      <div className="my-8 border-t border-border-neutral" />

      <h2 className="text-lg sm:text-xl font-semibold text-ivory mb-5">Категории обрабатываемых данных</h2>

      <Block
        num="I"
        title="Регистрация и заявки"
        purpose="Регистрация на сайте и оформление заявок на товары/услуги."
        data="Фамилия, имя, отчество; телефон; адрес электронной почты."
        subjects="Пользователи сайта, клиенты."
      />

      <Block
        num="II"
        title="Исполнение договора"
        purpose="Заключение и исполнение договоров, обработка возвратов."
        data="ФИО; контактные данные; дата рождения; документы, удостоверяющие личность; СНИЛС; адрес; сведения о трудовой деятельности и образовании; учётные данные; информация об устройстве."
        subjects="Покупатели и пользователи услуг."
      />

      <Block
        num="III"
        title="Соблюдение законодательства"
        purpose="Исполнение требований налогового учёта, бухгалтерской отчётности и ответы на запросы государственных органов."
        data="Весь перечень данных, указанных в Категории II, применительно ко всем причастным лицам."
        subjects="Все стороны договорных отношений и связанные лица."
      />

      <Block
        num="IV"
        title="Маркетинговые коммуникации"
        purpose="Рассылка новостей, акций и коммерческих предложений по электронной почте и SMS."
        data="Имя, телефон, адрес электронной почты."
        subjects="Пользователи сайта, подписчики рассылки."
      />

      <Block
        num="V"
        title="Обратная связь"
        purpose="Сбор отзывов и комментариев о качестве товаров и сервиса."
        data="Имя, контактные данные, фото- и видеозаписи."
        subjects="Покупатели, пользователи услуг."
      />

      <div className="my-8 border-t border-border-neutral" />

      <h2 className="text-lg sm:text-xl font-semibold text-ivory mb-4">Срок действия и отзыв согласия</h2>

      <P>
        Настоящее согласие действует до момента его отзыва субъектом персональных данных. Отзыв осуществляется путём направления письменного заявления на адрес электронной почты <a href="mailto:sales@qwik.pro" className="text-ivory hover:underline">sales@qwik.pro</a>.
      </P>
      <P>
        В случае отзыва согласия Оператор обязан прекратить обработку персональных данных и уничтожить их в течение 30 дней с момента получения соответствующего заявления, если иное не предусмотрено действующим законодательством Российской Федерации.
      </P>

      <div className="my-8 border-t border-border-neutral" />

      <h2 className="text-lg sm:text-xl font-semibold text-ivory mb-4">Отказ от рекламной рассылки</h2>
      <P>
        Для отказа от получения информационных и рекламных сообщений необходимо направить обращение на адрес <a href="mailto:sales@qwik.pro" className="text-ivory hover:underline">sales@qwik.pro</a> с пометкой «Отказ от информационной и рекламной рассылки».
      </P>

      <div className="mt-10 p-5 rounded-xl border border-border-accent bg-emerald-dark/60 text-sm text-text-secondary">
        <p className="font-semibold text-ivory mb-1">Оператор персональных данных</p>
        <p>ИП Кешенеев Руфат Рустамович</p>
        <p>ИНН: 262308877507</p>
        <p>Телефон: <a href="tel:+79064968802" className="text-ivory hover:underline">+7 (906) 496-88-02</a></p>
        <p>Email: <a href="mailto:sales@qwik.pro" className="text-ivory hover:underline">sales@qwik.pro</a></p>
        <p>Сайт: <a href="https://qwik.pro" className="text-ivory hover:underline" target="_blank" rel="noopener noreferrer">qwik.pro</a></p>
      </div>
    </LegalPage>
  )
}
