import React from 'react';
import { useSelector } from 'react-redux';
import './package_info.styles.css';
// 20450332281236

const PackageInfo = () => {
  const packageInfo = useSelector((state) => state.packages.packageInfo);

  if (!packageInfo) return null;

  const {
    WarehouseRecipient,
    Status,
    RecipientDateTime,
    CitySender,
    CityRecipient,
    ActualDeliveryDate,
  } = packageInfo;

  return (
    <div className="package-info-wrap">
      <span>
        статус - {Status} {RecipientDateTime}
      </span>
      <ul>
        <li>маршрут:</li>
        <li>
          {CitySender} - {CityRecipient}
        </li>
        <li>Адрес доставки:</li>
        <li>{WarehouseRecipient}</li>
        <li>дата доставки:</li>
        <li>{ActualDeliveryDate}</li>
      </ul>
    </div>
  );
};

export default PackageInfo;
