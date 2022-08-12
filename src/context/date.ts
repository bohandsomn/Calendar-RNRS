import React from 'react'

import type Node from '../utils/calendar/node'

export type IDate = Pick<Node, 'month' | 'week' | 'day' | 'date' | 'year'>

const DATE = React.createContext<IDate | undefined>(undefined)

export default DATE
