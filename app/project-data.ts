export type DashboardInfo = {
  url: string;
  fullUrl: string;
  title: string;
};

export type Project = {
  eyebrow: string;
  title: string;
  summary: string;
  overview: string;
  githubUrl: string;
  dashboard: DashboardInfo;
  highlights: {
    label: string;
    body: string;
  }[];
};

export const featuredProject: Project = {
  eyebrow: "Featured Project",
  title: "KYC Entity Resolution",
  summary:
    "A machine learning data product for resolving customer and business entities across messy KYC records, duplicate profiles, and inconsistent identifiers.",
  overview:
    "This project demonstrates an entity resolution workflow for KYC data, combining record linkage, similarity scoring, matching logic, and an interactive Streamlit interface to help identify duplicate or related entities across fragmented customer records.",
  githubUrl: "https://github.com/EhsanMehryaar/kyc-entity-resolution",
  dashboard: {
    url: "https://kyc-entity-resolution-fbaqemktvjrj445u5kjrti.streamlit.app/?embedded=true",
    fullUrl:
      "https://kyc-entity-resolution-fbaqemktvjrj445u5kjrti.streamlit.app/",
    title: "KYC Entity Resolution Dashboard",
  },
  highlights: [
    {
      label: "Problem",
      body: "KYC workflows often contain duplicate, incomplete, or inconsistent records that make it difficult to identify whether entities refer to the same real-world customer or business.",
    },
    {
      label: "Approach",
      body: "Built an entity resolution workflow with feature engineering, similarity scoring, match review, and an interactive dashboard for exploring candidate links.",
    },
    {
      label: "Outcome",
      body: "Delivered a deployable demo that supports faster review of entity matches, duplicate detection, and explainable KYC record resolution decisions.",
    },
  ],
};

export const otherProjects: Project[] = [
  {
    eyebrow: "Project",
    title: "Bidding Optimization & Incrementality Measurement Simulator",
    summary:
      "A simulator for bidding optimization and incrementality measurement, helping advertisers test spend allocation, conversion lift, and campaign efficiency in a product-style Streamlit interface.",
    overview:
      "This project simulates bidding optimization and incrementality measurement workflows, allowing users to explore campaign-level spend, lift, and return on ad spend scenarios with interactive dashboards and evaluation metrics.",
    githubUrl:
      "https://github.com/EhsanMehryaar/Bidding-Optimization-Incrementality-Measurement-Simulator",
    dashboard: {
      url: "https://bidding-optimization-incrementality-measurement-simulator-nyjr.streamlit.app/?embedded=true",
      fullUrl:
        "https://bidding-optimization-incrementality-measurement-simulator-nyjr.streamlit.app/",
      title: "Bidding Optimization & Incrementality Measurement Simulator",
    },
    highlights: [
      {
        label: "Problem",
        body: "Measure incrementality while optimizing bids so advertisers can understand true campaign lift and efficient spend.",
      },
      {
        label: "Approach",
        body: "Built a simulated adoption of ad campaigns, incrementality tests, and optimization dashboards to compare outcomes across spend scenarios.",
      },
      {
        label: "Outcome",
        body: "Delivered an interactive simulator for bidding and incrementality measurement that supports decision-making with practical metrics and scenario comparisons.",
      },
    ],
  },
  {
    eyebrow: "Project",
    title: "Creative Recommendation Engine for Video Ads",
    summary:
      "A product-oriented video ad creative recommendation engine that ranks creatives by predicted engagement, relevance, and context fit.",
    overview:
      "This project simulates an ads-quality recommendation system for video creatives, generating synthetic impression-level data and ranking candidates by predicted engagement across segment, device, category, and campaign context.",
    githubUrl:
      "https://github.com/EhsanMehryaar/Creative-Recommendation-Engine-for-Video-Ads",
    dashboard: {
      url: "https://creative-recommendation-engine-for-video-ads-bcc6xhvz25jj7khcj.streamlit.app/?embedded=true",
      fullUrl:
        "https://creative-recommendation-engine-for-video-ads-bcc6xhvz25jj7khcj.streamlit.app/",
      title: "Creative Recommendation Engine for Video Ads Dashboard",
    },
    highlights: [
      {
        label: "Problem",
        body: "Help advertisers serve the right video creative to the right audience by ranking ads on predicted engagement and relevance.",
      },
      {
        label: "Approach",
        body: "Generated synthetic impression-level data, engineered relevance features, performed EDA, and built a ranking model with a Streamlit dashboard for recommendations and diagnostics.",
      },
      {
        label: "Outcome",
        body: "Delivered an interactive recommendation demo with KPI cards, ranked creative suggestions, explainability, evaluation charts, and product insights.",
      },
    ],
  },
  {
    eyebrow: "Project",
    title: "Ad Relevance & CTR Prediction",
    summary:
      "An earlier advertising analytics project demonstrating click-through rate prediction, ad relevance scoring, and an interactive Streamlit dashboard.",
    overview:
      "This project predicts ad click-through rate and evaluates ad relevance using machine learning. It demonstrates an end-to-end data science workflow, including data preparation, feature engineering, model training, evaluation, and dashboard-based interpretation.",
    githubUrl: "https://github.com/EhsanMehryaar/Ad-Relevance-CTR-Prediction",
    dashboard: {
      url: "https://ad-relevance-ctr-prediction-a6cwqh6yt5ljqkret9wchb.streamlit.app?embedded=true",
      fullUrl:
        "https://ad-relevance-ctr-prediction-a6cwqh6yt5ljqkret9wchb.streamlit.app",
      title: "Ad Relevance CTR Prediction Dashboard",
    },
    highlights: [
      {
        label: "Problem",
        body: "Estimate whether users are likely to click on ads and identify signals that improve ad relevance.",
      },
      {
        label: "Approach",
        body: "Built a machine learning pipeline using structured ad/user features, feature engineering, model evaluation, and performance comparison.",
      },
      {
        label: "Outcome",
        body: "Created a deployable ML dashboard showing model performance, calibration, lift, feature importance, and live CTR prediction.",
      },
    ],
  },
];
