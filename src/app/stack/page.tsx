export default function Stack() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-4 md:p-20">
        <h1 className="text-4xl font-bold">Технологии</h1>
        <p className="mt-4 text-lg">
          Языки, фреймворки, библиотеки и инструменты, которые я использую в
          проектах.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1 flex flex-col">
            <p className="text-lg">
              <span className="font-bold">TypeScript</span> - язык
              программирования, который позволяет мне писать более простой и
              читаемый код.
            </p>
            <p className="mt-2 text-lg">
              <span className="font-bold">Next.js</span> - фреймворк для
              создания сайтов, который позволяет мне легко создавать приложения.
            </p>
          </div>
          <div className="col-span-1 flex flex-col">
            <p className="text-lg">
              <span className="font-bold">Tailwind CSS</span> - CSS-библиотека,
              которая позволяет мне создавать стили для моих приложений.
            </p>
            <p className="mt-2 text-lg">
              <span className="font-bold">React</span> - библиотека для создания
              интерфейсов, которая позволяет мне легко создавать
              пользовательские интерфейсы.
            </p>
          </div>
          <div className="col-span-1 flex flex-col">
            <p className="text-lg">
              <span className="font-bold">Vercel</span> - сервис для создания
              сайтов, который позволяет мне легко создавать приложения.
            </p>
            <p className="mt-2 text-lg">
              <span className="font-bold">GitHub</span> - сервис для хранения и
              совместной работы над проектами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
