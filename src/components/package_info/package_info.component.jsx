import React from 'react';
import { useSelector } from 'react-redux';
import PhoneForm from '../phone_form/phone_form.component';
import './package_info.styles.css';
// 20450332281236

const PackageInfo = () => {
  const packageInfo = useSelector((state) => state.packages.packageInfo);
  const showDetailed = useSelector((state) => state.packages.showDetailed);

  if (!packageInfo) return null;

  const {
    WarehouseRecipient,
    Status,
    RecipientDateTime,
    CitySender,
    CityRecipient,
    ActualDeliveryDate,
    RecipientFullName,
    SenderFullNameEW,
    PhoneRecipient,
    PhoneSender,
    CargoDescriptionString,
    ScheduledDeliveryDate,
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
      {!showDetailed ? null : (
        <ul>
          <li>Имя получателя:</li>
          <li>{RecipientFullName}</li>
          <li>Имя отправителя:</li>
          <li>{SenderFullNameEW}</li>
          <li>Телефон {PhoneSender ? 'отправителя' : 'получателя'}:</li>
          <li>{PhoneSender || PhoneRecipient}</li>
          <li>Описание посылки:</li>
          <li>{CargoDescriptionString}</li>
          <li>Ожидаемое время доставки:</li>
          <li>{ScheduledDeliveryDate}</li>
        </ul>
      )}

      <PhoneForm />
    </div>
  );
};

export default PackageInfo;
