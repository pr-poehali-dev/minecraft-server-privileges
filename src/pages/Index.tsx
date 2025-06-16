import PrivilegeCard from "@/components/PrivilegeCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-montserrat">
            Привилегии
          </h1>
          <p className="text-gray-600">Выберите свой уровень доступа</p>
        </div>

        <div className="space-y-4">
          <PrivilegeCard title="Stone" price={300} icon="Mountain" />
          <PrivilegeCard title="нач.кит" price={40} icon="Package" />
          <PrivilegeCard title="легенда" price={500} icon="Crown" />
          <PrivilegeCard title="more" price={590} icon="Plus" />
        </div>
      </div>
    </div>
  );
};

export default Index;
