import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import ItemsTable from '../ItemsTable';

const itemsAPI_URL = 'http://127.0.0.1:5000';

export default function ItemsPage() {
  const [itemsData, setItemsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const swItemsData = await fetch(`${itemsAPI_URL}/restaurants/1/items`);
    const swItemsDataStatus = swItemsData.status;
    const swItemsDataJSON = await swItemsData.json();
    console.log(swItemsDataJSON);
    setItemsData(swItemsDataJSON);
    setDataRequestStatus(swItemsDataStatus);
    setDataLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }

  return (
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      {dataLoading ? (
        <LoadingContainer />
      ) : (<ItemsTable itemsData={itemsData} />)}
    </Container>
  );
}