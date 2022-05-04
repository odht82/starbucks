import { StatusPill, Select, QuantityPill } from "./Table/TableElements/ElementProcessor";

export const columns = [
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
]
export const tabletColumns = [
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
]
export const mobileColumns = [
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
]