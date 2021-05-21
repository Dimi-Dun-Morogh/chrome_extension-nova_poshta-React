import { IAction } from '../action_interface';

export enum PackagesActionTypes {
  SET_PACKAGE_INFO = 'SET_PACKAGE_INFO',
  SET_CURRENT_TRACK = 'SET_CURRENT_TRACK',
  TOGGLE_DETAILED = 'TOGGLE_DETAILED',
}

export interface IPackage {
  Number: string;
  Redelivery: number;
  RedeliverySum: number;
  RedeliveryNum: string;
  RedeliveryPayer: string;
  OwnerDocumentType: string;
  LastCreatedOnTheBasisDocumentType: string;
  LastCreatedOnTheBasisPayerType: string;
  LastCreatedOnTheBasisDateTime: string;
  LastTransactionStatusGM: string;
  LastTransactionDateTimeGM: string;
  DateCreated: string;
  CheckWeight: number;
  SumBeforeCheckWeight: number;
  PayerType: string;
  RecipientFullName: string;
  RecipientDateTime: string;
  ScheduledDeliveryDate: string;
  PaymentMethod: string;
  CargoDescriptionString: string;
  CargoType: string;
  CitySender: string;
  CityRecipient: string;
  WarehouseRecipient: string;
  CounterpartyType: string;
  AfterpaymentOnGoodsCost: number;
  ServiceType: string;
  UndeliveryReasonsSubtypeDescription: string;
  WarehouseRecipientNumber: number;
  LastCreatedOnTheBasisNumber: string;
  PhoneSender: string;
  SenderFullNameEW: string;
  WarehouseRecipientInternetAddressRef: string;
  MarketplacePartnerToken: string;
  ClientBarcode: string;
  SenderAddress: string;
  RecipientAddress: string;
  CounterpartySenderDescription: string;
  CounterpartySenderType: string;
  DateScan: string;
  PaymentStatus: string;
  PaymentStatusDate: string;
  AmountToPay: string;
  AmountPaid: string;
  PhoneRecipient?:string;
  LastAmountTransferGM: string;
  LastAmountReceivedCommissionGM: string;
  DocumentCost: string;
  DocumentWeight: number;
  AnnouncedPrice: number;
  UndeliveryReasonsDate: string;
  RecipientWarehouseTypeRef: string;
  OwnerDocumentNumber: string;
  InternationalDeliveryType: string;
  WarehouseSender: string;
  WarehouseRecipientRef: string;
  LoyaltyCardSender: string;
  LoyaltyCardRecipient: string;
  FactualWeight: string;
  DeliveryTimeframe: string;
  VolumeWeight: string;
  SeatsAmount: string;
  ActualDeliveryDate: string;
  RefCitySender: string;
  RefCityRecipient: string;
  CardMaskedNumber: string;
  BarcodeRedBox: string;
  Packaging?: (null)[] | null;
  AviaDelivery: number;
  OnlineCreditStatus: string;
  AdjustedDate: string;
  FreeShipping: number;
  CheckWeightMethod: string;
  SecurePayment: boolean;
  PartialReturnGoods?: (null)[] | null;
  CalculatedWeight: string;
  ExpressWaybillPaymentStatus: string;
  ExpressWaybillAmountToPay: number;
  CategoryOfWarehouse: string;
  WarehouseSenderAddress: string;
  WarehouseRecipientAddress: string;
  PossibilityCreateRedirecting: boolean;
  PossibilityCreateReturn: boolean;
  PossibilityCreateRefusal: boolean;
  PossibilityChangeEW: boolean;
  PossibilityChangeDeliveryIntervals: boolean;
  WarehouseSenderInternetAddressRef: string;
  RedeliveryServiceCost: string;
  DaysStorageCargo: string;
  DateFirstDayStorage: string;
  StorageAmount: string;
  StoragePrice: string;
  DateReturnCargo: string;
  InternetDocumentDescription: string;
  RefSettlementSender: string;
  RefSettlementRecipient: string;
  AdditionalInformationEW: string;
  PostomatV3CellReservationNumber: boolean;
  CargoReturnRefusal: boolean;
  Status: string;
  StatusCode: string;
  RefEW: string;
  DatePayedKeeping: string;
  OnlineCreditStatusCode: string;
}

type SetPackageInfoType = IAction<PackagesActionTypes.SET_PACKAGE_INFO, IPackage>;

type SetCurrentTrackType = IAction<PackagesActionTypes.SET_CURRENT_TRACK, string>;

type ToggleDetailedType = IAction<PackagesActionTypes.TOGGLE_DETAILED, boolean>;

export type PackagesActionsTypes = SetPackageInfoType | SetCurrentTrackType | ToggleDetailedType;
