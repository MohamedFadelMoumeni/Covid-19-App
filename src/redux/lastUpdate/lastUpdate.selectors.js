import { SelectAll } from '@material-ui/icons';
import { createSelector } from 'reselect';

const selectAllElement = state => state.allElement;

export const selectAll = createSelector(
    [selectAllElement],
    (allElement) => allElement.all
)

export const selectDataForGraph = createSelector(
    [selectAll],
    (all) => {
        const chartData = [];
        let lastDataPoint;
        for (let date in all.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: all["cases"][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = all["cases"][date]
        }
        return chartData
    }
)

