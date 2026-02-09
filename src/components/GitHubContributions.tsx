import { ContributionCalendar } from '@/lib/github';

const LEVEL_COLORS: Record<string, string> = {
  NONE: '#ebedf0',
  FIRST_QUARTILE: '#9be9a8',
  SECOND_QUARTILE: '#40c463',
  THIRD_QUARTILE: '#30a14e',
  FOURTH_QUARTILE: '#216e39',
};

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

const CELL_SIZE = 12;
const CELL_GAP = 3;
const LABEL_WIDTH = 30;
const HEADER_HEIGHT = 20;

export default function GitHubContributions({ calendar }: { calendar: ContributionCalendar }) {
  const weeks = calendar.weeks;
  const totalWidth = LABEL_WIDTH + weeks.length * (CELL_SIZE + CELL_GAP);
  const totalHeight = HEADER_HEIGHT + 7 * (CELL_SIZE + CELL_GAP);

  // Derive month label positions from the actual week data
  const monthPositions: { label: string; x: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return;
    const month = new Date(firstDay.date + 'T00:00:00').getMonth();
    if (month !== lastMonth) {
      monthPositions.push({
        label: MONTH_LABELS[month],
        x: LABEL_WIDTH + i * (CELL_SIZE + CELL_GAP),
      });
      lastMonth = month;
    }
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${totalWidth} ${totalHeight}`}
          className="w-full max-w-full"
          style={{ minWidth: 680 }}
        >
          {/* Month labels */}
          {monthPositions.map(({ label, x }) => (
            <text
              key={`${label}-${x}`}
              x={x}
              y={12}
              fontSize="10"
              fill="#6b7280"
              fontFamily="system-ui, sans-serif"
            >
              {label}
            </text>
          ))}

          {/* Day labels */}
          {DAY_LABELS.map((label, i) => (
            label && (
              <text
                key={label}
                x={0}
                y={HEADER_HEIGHT + i * (CELL_SIZE + CELL_GAP) + CELL_SIZE - 1}
                fontSize="9"
                fill="#9ca3af"
                fontFamily="system-ui, sans-serif"
              >
                {label}
              </text>
            )
          ))}

          {/* Contribution cells */}
          {weeks.map((week, wi) =>
            week.contributionDays.map((day, di) => (
              <rect
                key={day.date}
                x={LABEL_WIDTH + wi * (CELL_SIZE + CELL_GAP)}
                y={HEADER_HEIGHT + di * (CELL_SIZE + CELL_GAP)}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx={2}
                fill={LEVEL_COLORS[day.contributionLevel] || LEVEL_COLORS.NONE}
              />
            ))
          )}
        </svg>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        {calendar.totalContributions.toLocaleString()} contributions in the last year
      </p>
    </div>
  );
}
