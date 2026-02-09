// ============ TYPES ============

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

// ============ GRAPHQL HELPER ============

async function fetchGitHubGraphQL(query: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('GITHUB_TOKEN not configured');
    return null;
  }

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error('GitHub GraphQL error:', res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.error('GitHub GraphQL errors:', json.errors);
      return null;
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return null;
  }
}

// ============ QUERY ============

const CONTRIBUTIONS_QUERY = `
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

// ============ DATA FETCHER ============

export async function getContributions(): Promise<ContributionCalendar | null> {
  const data = await fetchGitHubGraphQL(CONTRIBUTIONS_QUERY);
  return data?.viewer?.contributionsCollection?.contributionCalendar ?? null;
}
