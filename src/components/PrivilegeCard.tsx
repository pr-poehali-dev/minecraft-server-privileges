import Icon from "@/components/ui/icon";

interface PrivilegeCardProps {
  title: string;
  price: number;
  icon: string;
  description?: string;
}

const PrivilegeCard = ({
  title,
  price,
  icon,
  description,
}: PrivilegeCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Icon name={icon} size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-gray-800">{price}</span>
          <span className="text-sm text-gray-500 ml-1">₽</span>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeCard;
