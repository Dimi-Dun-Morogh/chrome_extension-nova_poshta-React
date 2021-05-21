import React from 'react';
import { useSelector } from 'react-redux';
import HistoryTable from '../../components/history_table/history_table.component';
import { RootStateType } from '../../redux/root-reducer';

const HistoryPage = () => {
  const packages = useSelector((state: RootStateType) => state.history.historyPageTracks);
  return (
    <div className="history-page-wrap">
      <HistoryTable packages={packages} />
    </div>
  );
};

export default HistoryPage;
