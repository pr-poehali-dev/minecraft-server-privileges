import Icon from "@/components/ui/icon";

interface PrivilegeCardProps {
  title: string;
  price: number;
  icon?: string;
}

const PrivilegeCard = ({
  title,
  price,
  icon = "Crown",
}: PrivilegeCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
      {/* Inner card */}
      <div className="relative bg-white rounded-3xl p-8 h-full">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon name={icon} size={32} className="text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 font-montserrat">
            {title}
          </h2>

          {/* Price */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl font-bold text-gray-800 font-montserrat">
              {price}
            </span>
            <span className="text-xl text-gray-600 font-medium">₽</span>
          </div>

          {/* Features */}
          <div className="space-y-3 text-left">
            {[
              "Приоритетная поддержка",
              "Расширенный функционал",
              "Эксклюзивные возможности",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action button */}
          <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Получить доступ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeCard;
