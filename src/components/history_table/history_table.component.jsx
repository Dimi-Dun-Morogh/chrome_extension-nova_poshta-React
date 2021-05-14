import React from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import './history_table.styles.css';

const HistoryTable = ({ packages }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = (tnn) => {
    dispatch(fetchPackageInfo(tnn));
    history.push('/');
  };
  return (
    <Table striped bordered variant="dark" hover size="sm" className="history-table">
      <thead>
        <tr>
          <th>{t('history_table.track')}#</th>
          <th>{t('history_table.route')}</th>
          <th>{t('history_table.status')}</th>
        </tr>
      </thead>
      <tbody>
        {packages.map((pack) => (
          <tr key={pack.Number}>
            <td>
              <span
                className="history-table-number"
                href="#"
                onClick={() => handleClick(pack.Number)}
              >
                {pack.Number}
              </span>
            </td>
            <td>
              {pack.WarehouseSender} - {pack.WarehouseRecipient}
            </td>
            <td>{pack.Status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HistoryTable;
