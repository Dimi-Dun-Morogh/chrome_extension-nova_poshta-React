import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation  } from 'react-i18next';
import PhoneForm from '../phone_form/phone_form.component';
import './package_info.styles.css';


const PackageInfo = () => {
  const oldPhone = useSelector((state) => state.history.oldPhoneNumb);
  const packageState = useSelector((state)=>state.packages);
  const { packageInfo, showDetailed} = packageState;
  const { t } = useTranslation();

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
        {t('package_info.status')} - {Status} {RecipientDateTime}
      </span>
      <ul>
        <li>{t('package_info.route')}:</li>
        <li>
          {CitySender} - {CityRecipient}
        </li>
        <li>{t('package_info.Delivery_address')}:</li>
        <li>{WarehouseRecipient}</li>
        <li>{t('package_info.date_of_delivery')}:</li>
        <li>{ActualDeliveryDate}</li>
      </ul>
      {!showDetailed ? null : (
        <ul>
          <li>{t('package_info.name_of_receiver')}:</li>
          <li>{RecipientFullName}</li>
          <li>{t('package_info.sender_name')}:</li>
          <li>{SenderFullNameEW}</li>
          <li>{t('package_info.phone_number')} {PhoneSender ? t('package_info.phone_sender') : t('package_info.phone_receiver')}:</li>
          <li>{PhoneSender || PhoneRecipient}</li>
          <li>{t('package_info.package_description')}:</li>
          <li>{CargoDescriptionString}</li>
          <li>{t('package_info.estimated_delivery_time')}:</li>
          <li>{ScheduledDeliveryDate}</li>
        </ul>
      )}

      <PhoneForm  oldPhone={oldPhone}/>
    </div>
  );
};

export default PackageInfo;
