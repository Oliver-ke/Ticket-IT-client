import { Table, Divider, Tag, Popconfirm , Card} from 'antd';
import EditBox from './EditBox'
import React, {useState} from 'react'
const { Column, } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

const TableContainer = (props) =>{
    const [edit, SetEdit] = useState(false);
    const [formData, setData] = useState({})

    const hanldeEditClick = (value) =>{
        SetEdit(true);
        setData(value);
        console.log(value)
    }
    return(
       <Card>
           {edit && (<EditBox />)}
        <Table dataSource={data} bordered >
          <Column
            title="Ticket Name"
            dataIndex="ticketName"
            key="ticketName"
          />
          <Column
            title="Ticket Ref"
            dataIndex="ticketRef"
            key="ticketRef"
          />
          <Column
            title="Price"
            dataIndex="price"
            key="price"
           />
        <Column
          title="Bought Tickets"
          dataIndex="boughtTickets"
          key="boughtTicket"
        />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <span>
              {tags.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            data.length >= 1
              ? (
                <span>
                <a onClick={() => hanldeEditClick(record)}>Edit</a>
                <Divider type="vertical" />
                <Popconfirm title="Sure to delete?" onConfirm={() => console.log("accepted", record)}>
                  <a>Delete</a>
                </Popconfirm>
                </span>
              ) : null
          ) }
        />
      </Table>
       </Card>
    )
}

export default TableContainer
