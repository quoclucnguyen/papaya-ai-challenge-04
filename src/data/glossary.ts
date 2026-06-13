import type { GlossaryCategory, GlossaryTerm } from '../types/glossary';

export const CATEGORIES: GlossaryCategory[] = [
  'General Insurance',
  'Claims',
  'Coverage',
  'Life & Health',
  'Reinsurance',
  'Regulatory',
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'premium',
    name: 'Premium',
    category: 'General Insurance',
    definition:
      'A premium is the amount a policyholder pays to keep an insurance policy active. It may be paid monthly, quarterly, annually, or as a single upfront payment depending on the policy terms.',
    relatedTerms: ['Policyholder', 'Policy', 'Underwriting'],
  },
  {
    id: 'policy',
    name: 'Policy',
    category: 'General Insurance',
    definition:
      'A policy is the legal contract between an insurer and a policyholder. It describes what is covered, what is excluded, the premium due, and the obligations of both parties.',
    relatedTerms: ['Premium', 'Policyholder', 'Exclusion'],
  },
  {
    id: 'policyholder',
    name: 'Policyholder',
    category: 'General Insurance',
    definition:
      'The policyholder is the person or organization that owns the insurance policy. The policyholder is responsible for paying premiums and may or may not be the same person who is insured.',
    relatedTerms: ['Premium', 'Insured', 'Beneficiary'],
  },
  {
    id: 'insured',
    name: 'Insured',
    category: 'General Insurance',
    definition:
      'The insured is the person, property, or entity protected by an insurance policy. In life and health insurance, the insured is the individual whose life or health risk is covered.',
    relatedTerms: ['Policyholder', 'Beneficiary', 'Coverage'],
  },
  {
    id: 'underwriting',
    name: 'Underwriting',
    category: 'General Insurance',
    definition:
      'Underwriting is the process insurers use to evaluate risk and decide whether to issue a policy. It also helps determine pricing, coverage limits, exclusions, and special conditions.',
    relatedTerms: ['Premium', 'Risk Classification', 'Exclusion'],
  },
  {
    id: 'endorsement',
    name: 'Endorsement',
    category: 'General Insurance',
    definition:
      'An endorsement is a written amendment that changes the terms of an existing insurance policy. It can add, remove, or clarify coverage without replacing the entire policy.',
    relatedTerms: ['Rider', 'Policy', 'Coverage'],
  },
  {
    id: 'rider',
    name: 'Rider',
    category: 'General Insurance',
    definition:
      'A rider is an optional add-on that modifies an insurance policy, often by adding a specific benefit. Riders usually require an additional premium and may have their own conditions.',
    relatedTerms: ['Endorsement', 'Premium', 'Sub-limit'],
  },
  {
    id: 'risk-classification',
    name: 'Risk Classification',
    category: 'General Insurance',
    definition:
      'Risk classification groups applicants with similar expected loss patterns. Insurers use it to price policies fairly and maintain a balanced portfolio of risks.',
    relatedTerms: ['Underwriting', 'Premium', 'Mortality Table'],
  },
  {
    id: 'claim',
    name: 'Claim',
    category: 'Claims',
    definition:
      'A claim is a formal request for payment or service under an insurance policy. The insurer reviews the claim against policy terms before approving, denying, or requesting more information.',
    relatedTerms: ['Adjudication', 'Deductible', 'Exclusion'],
  },
  {
    id: 'deductible',
    name: 'Deductible',
    category: 'Claims',
    definition:
      'A deductible is the amount the insured must pay out of pocket before insurance benefits begin. Higher deductibles often reduce premiums because the policyholder retains more initial risk.',
    relatedTerms: ['Claim', 'Copay', 'Coinsurance'],
  },
  {
    id: 'copay',
    name: 'Copay',
    category: 'Claims',
    definition:
      'A copay is a fixed amount the insured pays for a covered service, such as a clinic visit or prescription. The insurer pays the remaining eligible amount according to the policy.',
    relatedTerms: ['Deductible', 'Coinsurance', 'Claim'],
  },
  {
    id: 'coinsurance',
    name: 'Coinsurance',
    category: 'Claims',
    definition:
      'Coinsurance is the percentage of an eligible cost shared by the insured after any deductible is met. For example, 20% coinsurance means the insured pays 20% and the insurer pays 80%.',
    relatedTerms: ['Copay', 'Deductible', 'Annual Limit'],
  },
  {
    id: 'adjudication',
    name: 'Adjudication',
    category: 'Claims',
    definition:
      'Adjudication is the insurer’s process of evaluating a claim and determining the payable amount. It checks eligibility, coverage rules, medical necessity, limits, and prior payments.',
    relatedTerms: ['Claim', 'Exclusion', 'Subrogation'],
  },
  {
    id: 'subrogation',
    name: 'Subrogation',
    category: 'Claims',
    definition:
      'Subrogation allows an insurer that has paid a claim to recover costs from a responsible third party. This helps prevent duplicate recovery and can reduce overall claim costs.',
    relatedTerms: ['Claim', 'Loss Ratio', 'Adjudication'],
  },
  {
    id: 'loss-adjuster',
    name: 'Loss Adjuster',
    category: 'Claims',
    definition:
      'A loss adjuster investigates and assesses the extent of a covered loss. Adjusters gather evidence, estimate damages, and recommend settlement amounts to the insurer.',
    relatedTerms: ['Claim', 'Adjudication', 'Reserve'],
  },
  {
    id: 'proof-of-loss',
    name: 'Proof of Loss',
    category: 'Claims',
    definition:
      'Proof of loss is documentation submitted by the insured to support a claim. It may include invoices, medical reports, police reports, photos, or signed claim forms.',
    relatedTerms: ['Claim', 'Adjudication', 'Waiting Period'],
  },
  {
    id: 'coverage',
    name: 'Coverage',
    category: 'Coverage',
    definition:
      'Coverage refers to the protection provided by an insurance policy for specified risks or events. It defines when the insurer will pay and under what conditions.',
    relatedTerms: ['Policy', 'Exclusion', 'Sum Insured'],
  },
  {
    id: 'sum-insured',
    name: 'Sum Insured',
    category: 'Coverage',
    definition:
      'Sum insured is the maximum amount an insurer will pay for a covered loss under a policy or benefit. It should reflect the value of the insured risk or the expected financial need.',
    relatedTerms: ['Annual Limit', 'Coverage', 'Sub-limit'],
  },
  {
    id: 'annual-limit',
    name: 'Annual Limit',
    category: 'Coverage',
    definition:
      'An annual limit is the maximum amount payable for covered benefits during one policy year. Once the limit is reached, the insured pays additional eligible expenses until the limit resets.',
    relatedTerms: ['Sum Insured', 'Sub-limit', 'Coinsurance'],
  },
  {
    id: 'sub-limit',
    name: 'Sub-limit',
    category: 'Coverage',
    definition:
      'A sub-limit is a smaller cap within a broader coverage limit, often applied to specific services or conditions. For example, a health policy may have an annual limit but a lower sub-limit for dental care.',
    relatedTerms: ['Annual Limit', 'Rider', 'Coverage'],
  },
  {
    id: 'exclusion',
    name: 'Exclusion',
    category: 'Coverage',
    definition:
      'An exclusion is a condition, event, or expense that the policy does not cover. Exclusions are important because they define the boundaries of coverage and help avoid claim disputes.',
    relatedTerms: ['Policy', 'Underwriting', 'Pre-existing Condition'],
  },
  {
    id: 'waiting-period',
    name: 'Waiting Period',
    category: 'Coverage',
    definition:
      'A waiting period is the time after a policy starts during which certain benefits are not yet payable. It is commonly used for maternity, dental, or pre-existing condition benefits.',
    relatedTerms: ['Pre-existing Condition', 'Coverage', 'Claim'],
  },
  {
    id: 'pre-existing-condition',
    name: 'Pre-existing Condition',
    category: 'Coverage',
    definition:
      'A pre-existing condition is a health issue that existed before insurance coverage began. Policies may cover it immediately, apply a waiting period, restrict benefits, or exclude it depending on underwriting rules.',
    relatedTerms: ['Waiting Period', 'Underwriting', 'Exclusion'],
  },
  {
    id: 'out-of-pocket-maximum',
    name: 'Out-of-pocket Maximum',
    category: 'Coverage',
    definition:
      'An out-of-pocket maximum is the most an insured must pay for covered services during a policy period. After reaching it, the insurer typically pays 100% of covered eligible costs.',
    relatedTerms: ['Deductible', 'Copay', 'Coinsurance'],
  },
  {
    id: 'beneficiary',
    name: 'Beneficiary',
    category: 'Life & Health',
    definition:
      'A beneficiary is the person or entity designated to receive policy benefits, especially after the insured’s death. Beneficiary designations should be kept current as family or business circumstances change.',
    relatedTerms: ['Policyholder', 'Insured', 'Maturity'],
  },
  {
    id: 'maturity',
    name: 'Maturity',
    category: 'Life & Health',
    definition:
      'Maturity is the date when a life insurance or savings-oriented policy reaches the end of its term. At maturity, the insurer may pay a maturity benefit if the policy conditions are met.',
    relatedTerms: ['Beneficiary', 'Surrender Value', 'Policy'],
  },
  {
    id: 'surrender-value',
    name: 'Surrender Value',
    category: 'Life & Health',
    definition:
      'Surrender value is the amount a policyholder may receive if they terminate certain life insurance policies before maturity. It is usually lower in early years because of charges and acquisition costs.',
    relatedTerms: ['Maturity', 'Premium', 'Policyholder'],
  },
  {
    id: 'mortality-table',
    name: 'Mortality Table',
    category: 'Life & Health',
    definition:
      'A mortality table shows expected death rates for groups of people by age and other factors. Actuaries use it to price life insurance and estimate future claim obligations.',
    relatedTerms: ['Actuarial', 'Risk Classification', 'Reserve'],
  },
  {
    id: 'actuarial',
    name: 'Actuarial',
    category: 'Life & Health',
    definition:
      'Actuarial work applies mathematics, statistics, and financial theory to insurance risk. Actuaries estimate premiums, reserves, solvency needs, and long-term claim patterns.',
    relatedTerms: ['Mortality Table', 'Reserve', 'Loss Ratio'],
  },
  {
    id: 'cash-value',
    name: 'Cash Value',
    category: 'Life & Health',
    definition:
      'Cash value is the savings component that can build inside certain permanent life insurance policies. It may be borrowed against, withdrawn, or used to support premium payments subject to policy rules.',
    relatedTerms: ['Surrender Value', 'Maturity', 'Premium'],
  },
  {
    id: 'critical-illness-benefit',
    name: 'Critical Illness Benefit',
    category: 'Life & Health',
    definition:
      'A critical illness benefit pays a lump sum or defined benefit when the insured is diagnosed with a covered serious illness. Covered illnesses and survival periods are specified in the policy wording.',
    relatedTerms: ['Coverage', 'Waiting Period', 'Exclusion'],
  },
  {
    id: 'medical-underwriting',
    name: 'Medical Underwriting',
    category: 'Life & Health',
    definition:
      'Medical underwriting evaluates an applicant’s health history, lifestyle, and medical information. The outcome can affect acceptance, premium rating, exclusions, or benefit limits.',
    relatedTerms: ['Underwriting', 'Pre-existing Condition', 'Risk Classification'],
  },
  {
    id: 'ceding-company',
    name: 'Ceding Company',
    category: 'Reinsurance',
    definition:
      'A ceding company is an insurer that transfers part of its risk to a reinsurer. It remains responsible to policyholders while using reinsurance to manage volatility and capacity.',
    relatedTerms: ['Reinsurer', 'Treaty', 'Facultative'],
  },
  {
    id: 'reinsurer',
    name: 'Reinsurer',
    category: 'Reinsurance',
    definition:
      'A reinsurer is an insurance company that accepts risk from another insurer. Reinsurers help insurers protect capital, stabilize results, and write larger or more complex risks.',
    relatedTerms: ['Ceding Company', 'Retrocession', 'Treaty'],
  },
  {
    id: 'retrocession',
    name: 'Retrocession',
    category: 'Reinsurance',
    definition:
      'Retrocession is reinsurance purchased by a reinsurer to transfer part of the risk it has assumed. It is essentially reinsurance for reinsurers and helps spread large exposures further.',
    relatedTerms: ['Reinsurer', 'Ceding Company', 'Treaty'],
  },
  {
    id: 'treaty',
    name: 'Treaty',
    category: 'Reinsurance',
    definition:
      'A treaty is a reinsurance agreement covering a defined portfolio of policies rather than one individual risk. Treaty reinsurance is usually automatic when risks meet the agreed terms.',
    relatedTerms: ['Ceding Company', 'Facultative', 'Loss Ratio'],
  },
  {
    id: 'facultative',
    name: 'Facultative',
    category: 'Reinsurance',
    definition:
      'Facultative reinsurance covers a single risk or policy that is individually reviewed by the reinsurer. It is often used for large, unusual, or high-value risks outside treaty limits.',
    relatedTerms: ['Treaty', 'Ceding Company', 'Underwriting'],
  },
  {
    id: 'loss-ratio',
    name: 'Loss Ratio',
    category: 'Reinsurance',
    definition:
      'Loss ratio compares incurred claims to earned premiums over a period. A high loss ratio may indicate underpricing, adverse claims experience, or the need for underwriting changes.',
    relatedTerms: ['Premium', 'Claim', 'Actuarial'],
  },
  {
    id: 'quota-share',
    name: 'Quota Share',
    category: 'Reinsurance',
    definition:
      'Quota share is proportional reinsurance where the insurer and reinsurer share premiums and losses by a fixed percentage. It is commonly used to support growth and diversify risk.',
    relatedTerms: ['Treaty', 'Ceding Company', 'Loss Ratio'],
  },
  {
    id: 'excess-of-loss',
    name: 'Excess of Loss',
    category: 'Reinsurance',
    definition:
      'Excess of loss reinsurance pays losses above a specified retention up to a limit. It protects insurers against severity from large individual claims or catastrophic events.',
    relatedTerms: ['Treaty', 'Reserve', 'Solvency'],
  },
  {
    id: 'solvency',
    name: 'Solvency',
    category: 'Regulatory',
    definition:
      'Solvency is an insurer’s ability to meet its financial obligations to policyholders as they come due. Regulators monitor solvency through capital requirements, stress tests, and reporting rules.',
    relatedTerms: ['Reserve', 'Compliance', 'Statutory Reporting'],
  },
  {
    id: 'reserve',
    name: 'Reserve',
    category: 'Regulatory',
    definition:
      'A reserve is money an insurer sets aside to pay future claims and policy obligations. Reserves are estimated using actuarial methods and are central to solvency supervision.',
    relatedTerms: ['IBNR', 'Actuarial', 'Solvency'],
  },
  {
    id: 'ibnr',
    name: 'IBNR',
    category: 'Regulatory',
    definition:
      'IBNR means incurred but not reported, referring to claims that have happened but have not yet been reported to the insurer. Insurers estimate IBNR reserves to reflect obligations already created by covered events.',
    relatedTerms: ['Reserve', 'Claim', 'Actuarial'],
  },
  {
    id: 'statutory-reporting',
    name: 'Statutory Reporting',
    category: 'Regulatory',
    definition:
      'Statutory reporting is the formal financial and operational reporting insurers submit to regulators. It supports supervision of solvency, market conduct, reserves, and compliance with insurance laws.',
    relatedTerms: ['Solvency', 'Reserve', 'Compliance'],
  },
  {
    id: 'compliance',
    name: 'Compliance',
    category: 'Regulatory',
    definition:
      'Compliance means following applicable laws, regulations, license conditions, and internal policies. In insurance, it covers product disclosures, sales practices, claims handling, privacy, and reporting.',
    relatedTerms: ['Statutory Reporting', 'Solvency', 'Market Conduct'],
  },
  {
    id: 'market-conduct',
    name: 'Market Conduct',
    category: 'Regulatory',
    definition:
      'Market conduct refers to how insurers treat customers throughout sales, servicing, and claims. Regulators review market conduct to ensure fair treatment, clear disclosures, and responsible distribution.',
    relatedTerms: ['Compliance', 'Claim', 'Policyholder'],
  },
  {
    id: 'capital-adequacy',
    name: 'Capital Adequacy',
    category: 'Regulatory',
    definition:
      'Capital adequacy measures whether an insurer has enough capital to absorb unexpected losses. It protects policyholders and supports confidence in the insurance system.',
    relatedTerms: ['Solvency', 'Reserve', 'Excess of Loss'],
  },
  {
    id: 'risk-based-capital',
    name: 'Risk-based Capital',
    category: 'Regulatory',
    definition:
      'Risk-based capital is a regulatory approach that links required capital to the insurer’s risk profile. Higher-risk assets, products, or underwriting exposures generally require more capital.',
    relatedTerms: ['Capital Adequacy', 'Solvency', 'Risk Classification'],
  },
];