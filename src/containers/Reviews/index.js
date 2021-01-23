import React, {useEffect} from 'react'
import { Table, Space, Button, Spin} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as revActions from '../../actions/revActions'
import {withRouter} from 'react-router-dom'



function Reviews(props) {


    const deleteRev = (row) => {
        props.revActions.deleteReview(row.id)
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder: 'ascend'
        },
        {
          title: 'Text',
          dataIndex: 'text',
          key: 'text',
        },
        {
            title: 'Created at',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Restaurant ID',
            dataIndex: 'restaurantId',
            key: 'restaurantId',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },      
        {
          title: 'Action',
          key: 'action',
          render: (row) => (
            <Space size="middle">
              <Button type="complete" danger onClick={() => deleteRev(row)}>Delete</Button>
            </Space>
          ),
        },
      ];

      const data = props.reviews?.map((item, i) => {
          return {
              key: i,
              id: item.id,
              text: item.text,
              createdAt: item.createdAt,
              restaurantId: item.restaurantId,
              userId: item.userId
          }
      })      
      
      useEffect(() => {
        props.revActions.getReviews()
      }, [])

    return(
        <Spin spinning={props.isLoading}>
            <Table size="small" columns={columns} dataSource={data} />
        </Spin>

    )
}
const mapStateToProps = state => ({
    isLoading: state.revReducer.isLoading,
    reviews: state.revReducer.reviews
  })
  
  const mapDispatchToProps = dispatch => ({
    revActions: bindActionCreators(revActions, dispatch)
  })
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Reviews))
