class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sorted_intervals = sorted(intervals, key=lambda x: x[0])
        combined = [ sorted_intervals[0] ]

        for current_interval in sorted_intervals[1:]:
            last_start, last_end = combined[-1]
            current_start, current_end = current_interval

            if current_start <= last_end:
                if last_end < current_end:
                # combined[-1][1] = current_end
                    combined[-1] = (last_start, current_end)
            else:
                combined.append(current_interval)


        return combined