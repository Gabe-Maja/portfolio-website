# Projects

## Project 1: Google Ads Performance Dashboard for Lead Generation Analysis

### Intro
Interactive Power BI dashboard built to analyze the effectiveness of Google Ads in driving lead generation and conversions. Includes dynamic filters, device-level insights, sales funnel tracking, and keyword analysis - designed to uncover over 20% improvement in lead conversion efficiency by identifying high-performing ad segments and optimising budget allocation.

### Details

**The Problem**

The marketing team lacked a clear, dynamic view into whether their Google Ads investment was effectively driving qualified leads and contributing to actual sales conversions. This represented a critical gap in marketing ROI visibility requiring immediate investigation. The marketing department needed to:

- Identify which devices, campaigns and keywords were delivering higher click-through and conversion rates
- Pinpoint budget allocation inefficiencies across different ad segments and device types
- Track conversion trends over time to understand campaign performance patterns
- Analyse keyword effectiveness to refine bidding strategies and reduce wasted spend
- Enable drill-down capabilities to investigate specific campaign performance and device behavior
- Replace static Excel reporting with dynamic, self-serve analytics capabilities

**The Approach**

To address this marketing intelligence gap, I developed a comprehensive Power BI analytics dashboard powered by Google Ads data. The solution was architected for maximum investigative flexibility and campaign optimization, enabling stakeholders to:

- **Multi-dimensional filtering**: Dynamically analyse across campaigns, ad groups, networks, devices, and click types with date range controls
- **KPI tracking**: Monitor key metrics including CTR, clicks, impressions, conversions and cost with custom DAX measures
- **Device performance analysis**: Deep-dive into mobile vs desktop conversion patterns to optimize device-specific strategies
- **Sales funnel visualization**: Track the complete lead journey from impression to conversion with visual funnel analysis
- **Keyword insights**: Utilise text analytics and word clouds to identify top-performing keywords and search terms

Key technical architecture:
- **SQL Views (SSMS)**: Built complex database views joining Google Ads performance data with lead conversion metrics
- **Advanced Power BI modeling**: Created sophisticated relationships enabling cross-filtering across all campaign dimensions
- **Custom DAX measures**: Developed calculated fields for CTR, CPC, conversion rates and ROI metrics
- **Dynamic visualizations**: Implemented interactive charts showing performance trends across time, device and keyword segments
- **Google Ads Connector**: Direct integration for real-time campaign performance data
- **Power Query & M Code**: Advanced data transformation logic to clean and structure advertising data

**Impact**

- **Identified 20% improvement potential**: Precisely uncovered high-performing device and keyword combinations enabling smarter budget allocation and conversion optimisation
- **Revealed critical device insights**: Discovered that mobile devices drove the most clicks but had lower conversion rates, prompting mobile landing page optimization initiatives
- **Exposed top-performing keywords**: Surfaced high-converting search terms (insurance, car etc.) enabling refined bidding strategies and reduced wasted spend
- **Transformed reporting capabilities**: Replaced static Excel reports with self-serve analytics platform, reducing campaign analysis time from hours to minutes
- **Enabled data-driven decisions**: Empowered non-technical marketing users to independently explore campaign insights and make optimisation decisions
- **Established performance monitoring**: Created foundation for ongoing campaign performance tracking and budget allocation optimization

### Tech Stack
- SQL (SSMS)
- Power BI
- DAX
- Google Ads Connector  
- Power Query
- M Code

### Skills Applied
- Dynamic dashboard design
- KPI calculation and measurement
- UX-focused filtering and drill-downs
- Digital marketing analytics
- Business performance storytelling
- Campaign optimisation analysis

---

## Project 2: Lead Scoring Model for Motor Insurance Conversion Optimization

### Intro
End-to-end statistical and machine learning pipeline designed to identify high-converting motor insurance leads using SQL, Python and Power BI. Combines statistical testing, predictive modeling and business-friendly dashboards—built to uncover up to 25% improvement in lead conversion efficiency by prioritizing lead profiles based on behavioral, demographic and engagement patterns.

### Details

**The Problem**

The sales and operations teams discovered a critical efficiency gap: while marketing efforts were generating large lead volumes, there was no data-driven methodology to prioritise leads with the highest conversion potential. This represented a massive opportunity cost requiring immediate analytical intervention. The sales department needed to:

- Identify which lead characteristics (age, source, contact patterns) correlated most strongly with successful conversions
- Prioritise sales efforts on leads with the highest likelihood of converting to policyholders
- Understand optimal contact strategies and engagement thresholds for different lead segments
- Quantify the relationship between lead traits and conversion success with statistical rigor
- Enable sales teams to focus efforts where they would yield the highest ROI
- Replace intuition-based lead prioritisation with data-driven scoring methodology

**The Approach**

To address this sales optimisation challenge, I developed a comprehensive, end-to-end lead scoring framework combining statistical analysis, machine learning and business intelligence. The solution was architected for maximum predictive accuracy and business usability, enabling stakeholders to:

- **Advanced feature engineering**: Transform raw lead data into predictive features including lead age bins, call engagement flags and conversion lag times
- **Statistical validation**: Conduct rigorous hypothesis testing (Mann-Whitney U, ANOVA) to identify statistically significant predictors of conversion success
- **Machine learning pipeline**: Build predictive models using tree-based ML models (CATBoost, XGBoost, LightGBM) and logistic regression to score lead conversion probability
- **Business intelligence layer**: Create Power BI dashboards translating model outputs into actionable lead prioritisation insights

Key technical architecture:
- **SQL Data Pipeline (SSMS)**: Built production-grade dataset through complex joins and transformations across base lead tables
- **Modular Python Pipeline (VS Code)**: Created reusable data cleaning framework with parameterised imputation, encoding and outlier handling
- **Statistical Testing Framework**: Implemented comprehensive feature selection using Mann-Whitney U tests, ANOVA, Mutual Information and correlation analysis
- **ML Model Development**: Deployed tree-based models (XGBoost) and logistic regression with proper validation and evaluation metrics
- **Power BI Integration**: Visualised model outputs and key conversion drivers with dynamic filtering by team, province and lead type
- **Version Control (GitHub)**: Maintained reproducible, modular codebase for scalability across similar ML problems

**Impact**

- **Quantified 25% conversion improvement potential**: Precisely identified high-performing lead profiles based on call patterns, source channels and demographic characteristics
- **Revealed critical engagement patterns**: Uncovered optimal contact attempt thresholds and call duration ranges that maximised conversion probability
- **Enabled predictive prioritization**: Replaced guesswork with interpretable, statistically-validated lead scoring methodology
- **Transformed sales efficiency**: Positioned sales teams to act faster and with higher confidence on leads most likely to convert
- **Established scalable framework**: Created modular, reusable pipeline applicable across different lead generation contexts and business units
- **Enhanced strategic decision-making**: Empowered sales management with data-driven insights into team performance and lead source effectiveness

### Tech Stack
- SQL (SSMS)
- Python (Pandas, Scikit-learn, SciPy, NumPy)
- Power BI
- Git / GitHub
- VS Code

### Skills Applied
- Exploratory Data Analysis
- Feature engineering & ETL
- Statistical hypothesis testing
- Machine learning model development
- Modular pipeline architecture
- Version control and reproducibility
- Predictive analytics and scoring
- Business intelligence visualisation
- Stakeholder-focused problem framing

---

## Project 3: Claims Approved in Error - Motor Insurance Analytics Dashboard

### Intro
Comprehensive Power BI analytics dashboard developed for a major motor insurance company to identify and analyze 4,658 claims erroneously approved for policyholders lacking specific coverage. Features multi-dimensional filtering across 5 error categories, product types, claim categories, and decision makers with time-series trend analysis—designed to uncover critical payment errors totaling ZAR 189.8 million over 6 months (47.2% error rate) and enable targeted corrective action to prevent future financial losses.

### Details

**The Problem**

The motor insurance company discovered a critical operational failure: claims were being systematically approved and paid out to policyholders who didn't have the relevant coverage in their policies. This represented a massive financial leak requiring immediate investigation. Some much needed insights included the following:

- Identify and categorise the different types of approval errors occurring across their portfolio
- Pinpoint which decision makers and processing workflows were most vulnerable to errors
- Track error trends over time to understand if this was an emerging crisis or systemic issue
- Analyse patterns across product types 
- Enable drill-down capabilities to investigate specific error categories and responsible parties
- Quantify the true scale of financial impact across the organisation

**The Approach**

To address this critical business crisis, I developed a comprehensive Power BI analytics dashboard powered by the company's claims database. The solution was architected for maximum investigative flexibility and root-cause analysis, enabling stakeholders to:

- **Multi-dimensional filtering**: Dynamically analyse across Claim No, Condition, Product Type, Claim Type, Policy Benefit Type, and date ranges
- **Error categorization**: Deep-dive into 5 specific error types including "Claim Type has no active cover on policy," "Product type does not offer the benefit," and "Claim Amount approved exceeds GBA accumulated"
- **Decision maker accountability**: Track performance by individual decision makers to identify training needs and process gaps
- **Time-series analysis**: Monitor error trends across months (Nov 2024 - May 2025) to identify seasonal patterns and improvement trajectories
- **Financial impact analysis**: Toggle between Total Approved Amount, Average Approved Amount, and Error Claims % for comprehensive cost analysis

Key technical architecture:
- **SQL Views (SSMS)**: Built complex database views joining claims, policy coverage, decision maker and error classification data
- **Advanced Power BI modeling**: Created sophisticated relationships enabling cross-filtering across all dimensions
- **Custom DAX measures**: Developed calculated fields for error percentages, financial impact metrics and decision maker performance indicators
- **Dynamic visualizations**: Implemented combo charts showing both volume and percentage trends over time
- **Interactive drill-through**: Enabled users to seamlessly navigate from high-level metrics to individual claim details
- **Power Query & M Code**: Advanced data transformation logic to accurately classify and categorise error types

**Impact**

- **Quantified massive financial exposure**: Discovered ~ZAR 190 million of claim payments in error over 6 months—representing a staggering 47.2% error rate across ~4700 individual claims
- **Revealed critical error patterns**: Uncovered that ~2800 claims had "no active cover on policy" and ~1900 involved "product type not offering the benefit"-enabling targeted process improvements
- **Enabled immediate accountability**: Dashboard's decision maker tracking allowed management to identify specific individuals responsible for processing errors, facilitating immediate corrective action and training
- **Transformed investigative capabilities**: Replaced manual claim auditing with a self-serve analytics platform, reducing error investigation time from days to minutes
- **Established data-driven governance**: Created foundation for ongoing monitoring and prevention of future coverage verification failures
- **Projected annual savings**: Based on 6-month analysis, potential annual prevention of ZAR 380+ million in erroneous payments through continued monitoring and process optimisation
- **Enhanced operational transparency**: Empowered claims management with real-time visibility into error categories, financial impact and individual performance metrics

### Tech Stack
- SQL (SSMS)
- Power BI
- Power Query
- M Code (Power Query formula language)
- DAX
- Database Views & Stored Procedures

### Skills Applied
- Financial risk analytics
- Claims processing workflow analysis
- Agent performance tracking and accountability systems
- Dynamic dashboard design for investigative analysis
- Cross-dimensional data modeling
- Business impact quantification and storytelling
- Operational efficiency optimisation
