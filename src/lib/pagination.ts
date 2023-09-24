import { Contact } from '@/interfaces/Contact-Interface'
import { useGetContactsQuery } from '@/redux/features/api/baseApi'
import { useCallback, useEffect, useState } from 'react'

interface DataSet {
  data: Contact[]
  pagination: number
}

const SlicedData = () => {
  const [contacts, setContacts] = useState<DataSet | undefined>()
  const { data, isLoading } = useGetContactsQuery()

  const reSlice = useCallback(
    (startIndex: number = 0) => {
      const endIndex = startIndex + 12
      setContacts({
        data: data?.slice(0, endIndex) ?? [],
        pagination: endIndex,
      })
    },
    [data]
  )

  useEffect(() => {
    if (!contacts && !isLoading) {
      reSlice()
    }
  }, [contacts, isLoading, reSlice])

  return {
    contacts: contacts?.data,
    isLoading,
    reSlice,
    pagination: contacts?.pagination,
  }
}

export default SlicedData
