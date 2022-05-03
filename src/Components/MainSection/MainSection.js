import React, { useEffect, useState, useMemo } from 'react';
import Table from './Table/Table';
import { Select, QuantityPill, StatusPill } from './Table/TableElements/ElementProcessor';

const MainSection = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("./listData.json")
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);

    const data = useMemo(() => list, [list])

    const columns = useMemo(() => [
        {
            Header: Select,
            accessor: 'id',
            Cell: Select,
            disableSortBy: true,
        },
        {
            Header: "Date Updated",
            accessor: 'time',
            align: 'flex-start',
        },
        {
            Header: "Title",
            accessor: 'title',
            align: 'flex-start',
        },
        {
            Header: "Details",
            accessor: 'details',
            disableSortBy: true,
            align: 'flex-start',
        },
        {
            Header: "Status",
            accessor: 'status',
            Cell: StatusPill,
            disableSortBy: true,
            align: 'flex-start',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}>Quantity</div>
            ),
            accessor: "stockQuantity",
            Cell: QuantityPill,
            disableSortBy: true,
            align: 'flex-end',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}>Unit Price</div>
            ),
            accessor: "unitPrice",
            Cell: row => (
                <div style={{ textAlign: "right" }}>${row.value}</div>
            ),
            disableSortBy: true,
            align: 'flex-end',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}>Amount</div>
            ),
            accessor: "amount",
            Cell: row => (
                <div style={{ textAlign: "right" }}>${parseFloat(row.value).toFixed(2)}</div>
            ),
            align: 'flex-end',
        },
    ], [])
    const tabletColumns = useMemo(() => [
        {
            Header: Select,
            accessor: 'id',
            Cell: Select,
            disableSortBy: true,
        },
        {
            Header: "Date Updated",
            accessor: 'time',
            align: 'flex-start',
        },
        {
            Header: "Title",
            accessor: 'title',
            align: 'flex-start',
        },
        {
            Header: "Status",
            accessor: 'status',
            Cell: StatusPill,
            disableSortBy: true,
            align: 'flex-start',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}></div>
            ),
            accessor: "stockQuantity",
            Cell: QuantityPill,
            disableSortBy: true,
            align: 'flex-end',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}>Amount</div>
            ),
            accessor: "amount",
            Cell: row => (
                <div style={{ textAlign: "right" }}>${parseFloat(row.value).toFixed(2)}</div>
            ),
            align: 'flex-end',
        },
    ], [])
    const mobileColumns = useMemo(() => [
        {
            Header: "Title",
            accessor: 'title',
            align: 'flex-start',
        },
        {
            Header: "",
            accessor: 'status',
            Cell: StatusPill,
            disableSortBy: true,
            align: 'flex-start',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}></div>
            ),
            accessor: "stockQuantity",
            Cell: QuantityPill,
            disableSortBy: true,
            align: 'flex-end',
        },
        {
            Header: () => (
                <div style={{ textAlign: "right" }}>Amount</div>
            ),
            accessor: "amount",
            Cell: row => (
                <div style={{ textAlign: "right" }}>${parseFloat(row.value).toFixed(2)}</div>
            ),
            align: 'flex-end',
        },
    ], [])

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto bg-skin-neutral-2
      lg:w-5/6
      ">
            <div className="flex w-full items-center justify-start border-b-2 p-6 py-4">
                <h5 className="text-xl font-bold text-neutral-9">Inventory</h5>
            </div>
            <div className="w-full h-full hidden md:hidden lg:block">
                <Table columns={columns} data={data} className='h-full' />
            </div>
            <div className="w-full h-full hidden md:block lg:hidden">
                <Table columns={tabletColumns} data={data} className='h-full' />
            </div>
            <div className="w-full h-full block md:hidden lg:hidden">
                <Table columns={mobileColumns} data={data} className='h-full' />
            </div>
        </div >
    );
};

export default MainSection;