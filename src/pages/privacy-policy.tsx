import React from "react";
import { GetStaticProps } from "next";
import { getNavigation } from "@/lib/service";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SEO } from "@/components/seo";
import Link from "next/link"

export default function PrivacyPolicy({ navigation }: { navigation: any }) {

  return (
    <>
    <SEO title={`Seabrook Finance | Privacy Policy`} description="A small London-based financial brokerage"/>
    <div className="flex flex-col min-h-[100vh]">
      <Header menuItems={navigation}/>
      <div className="bg-white">
        <div className="container mx-auto px-8 py-16 max-w-[600px]">
        <h3 className="text-[32px] font-bold text-stone-600">Seabrook Finance Ltd Privacy Policy</h3>
        <div className="max-w-[600px] w-full [&>p]:text-stone-600 [&>p]:text-xl [&>p]:my-8">
          


          <p><strong>Our contact details:</strong><br />
          Name: Seabrook Finance Ltd<br />
          Address: 7 Bell Yard, London WC2A 2JR UK<br />
          Phone Number: +44 (0)744-4459-238<br />
          E-mail: <Link href="mailto:clientsupport@seabrookfinance.com">clientsupport@seabrookfinance.com</Link><br />
          Web: www.seabrookfinance.com</p>

          <p><strong>The type of personal and corporate information we collect:</strong><br />
As part of our KYB process, we require all individuals acting as lenders and/or
investors and individuals representing corporate entities engaging in lending or
investing to provide the following information:<br /><br />
1. Full Name.<br />
2. Email address.<br />
3. Telephone Number.<br />
4. Proof of ID, such as a passport copy.<br />
5. Proof of home address, such as a utility bill, mortgage statement or local tax
bill.<br />
6. Company registration details.</p>

<p><strong>How we collect this personal and corporate information:</strong><br />
Most of the personal information we process is requested directly by us from the
third party in question. However, with regards to company information, such as
company headquarters and company directors, we may refer to publicly available
registers for that information as well such as Companies House.</p>

<p><strong>Why we collect this information:</strong><br />
This information is requested in order to ensure that we can provide the best possible
service to our clients by introducing them only to reputable third parties of good faith
and standing.</p>

<p><strong>How we process this information:</strong><br />
We use the information provided by these individuals and entities to run AML, PEP,
and sanction checks on them. This is done by entering that information into software
platforms specifically designed for that purpose and with whom Seabrook Finance
Ltd has a subscription.
Currently, that subscription is with CreditSafe (www.creditsafe.com)
As part of the KYB process, the information provided will be kept on record for
ongoing monitoring purposes.
Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we
rely on for processing this information are as follows:<br /><br />

(a) The provider’s consent. However, providers are able to remove<br />
their consent at any time by contacting:<br />
clientsupport@seabrookfinance.com<br />
(b) We have a legal obligation to conduct KYB due diligence.<br />
(b) We have a legitimate interest.<br /></p>


<p><strong>Do we pass any of that information on to any other bodies?</strong><br />
In performing our KYB due diligence, we never pass any of that information on to
our clients. If, in the course of conducting these checks, we come across information
which we feel would not support a particular introduction, then the client will be
informed of our decision to cease the introduction, but no further details will be
provided. However, in such circumstances, if the KYB process produces information
of a potentially criminal nature, then Seabrook Finance will be obliged to pass that
information on to the relevant regulatory authority.</p>

<p><strong>How we store your personal information</strong><br />
Providers’ information is stored on a single company computer, which is accessed by
the Seabrook Finance CEO and him alone. This is a private computer, which is kept
off-line whenever not in use and which has up-to-date anti-virus software installed as
well as a VPN.</p>

<p>Any information provided by a lender/investor with whom Seabrook Finance Ltd no
longer conducts business with or actively engages with in any meaningful way will be
kept on file for a further period of eighteen (18) months and then all files associated
with that entity will be permanently deleted from the company computer.</p>

<p><strong>Your data protection rights.</strong></p>
<p><strong>Under data protection law, your rights include the following:</strong><br />
Your right of access - You have the right to ask us for copies of your personal
information.<br />
Your right to rectification - You have the right to ask us to rectify personal
information you think is inaccurate. You also have the right to ask us to complete
information you think is incomplete.<br />
Your right to erasure - You have the right to ask us to erase your personal
information in certain circumstances.<br />
Your right to restriction of processing - You have the right to ask us to restrict
the processing of your personal information in certain circumstances.<br />
Your right to object to processing - You have the the right to object to the
processing of your personal information in certain circumstances.<br />
Your right to data portability - You have the right to ask that we transfer the
personal information you gave us to another organisation, or to you, in certain
circumstances.<br />
You are not required to pay any charge for exercising your rights. If you make a
request, we have one month to respond to you.<br />
Please contact us at <Link href="mailto:clientsupport@seabrookfinance.com">clientsupport@seabrookfinance.com</Link> if you wish to make a
request.</p>


<p><strong>How to lodge a complaint?</strong></p>

<p>If you have any concerns about our use of your personal information, you can make a
complaint to us at:<Link href="mailto:clientsupport@seabrookfinance.com">clientsupport@seabrookfinance.com</Link></p>
<p>You can also complain to the ICO if you are unhappy with how we have used your
data.</p>
<p>The ICO’s address:<br />
Information Commissioner’s Office<br />
Wycliffe House<br />
Water Lane<br />
Wilmslow<br />
Cheshire<br />
SK9 5AF<br />
Helpline number: 0303 123 1113<br />
ICO website: <Link href="https://www.ico.org.uk">https://www.ico.org.uk</Link></p>



        </div>
      </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await getNavigation()

  return {
    props: {
      navigation
    },
    revalidate: 3600,
  };
};


