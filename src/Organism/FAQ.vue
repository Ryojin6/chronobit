<template>
  <div>
    <MoleculeTitle title="FAQ" class="text-white" />
    <AtomAnimate class="grid w-full grid-cols-2 gap-10">
      <MoleculeAccordionCard
        v-for="item in faq"
        :key="item.id"
        class="w-full"
        :title="item.title"
        :description="item.description"
      />
    </AtomAnimate>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title:
            'What sets Chrono Bit apart as a luxury watch store in the Web3 space?',
          description: `   Chrono Bit distinguishes itself by being the premier luxury watch store exclusively accepting crypto payments. Chrono Bit leverages an exclusive network of experts in the watch industry with a commitment to Web3 principles ensuring transparency, security, and a decentralized shopping experience.`,
        },
        {
          title: 'How can I place an order on Chrono Bit?',
          description: `   Orders are exclusively processed through our official Discord channel. Join our Discord community, explore the curated selection of luxury watches, and follow the instructions provided to make a secure crypto payment.`,
        },
        {
          title: 'Which cryptocurrencies are accepted at Chrono Bit?',
          description: `   Chrono Bit currently accepts a range of cryptocurrencies. Check our Discord channel for the most up-to-date list of supported cryptocurrencies for payments.`,
        },
        {
          title: 'Are the watches on Chrono Bit authentic luxury timepieces?',
          description: `   Yes, Chrono Bit prides itself on offering only authentic luxury watches from renowned brands. Each timepiece undergoes thorough verification to ensure its authenticity and quality.`,
        },
        {
          title: 'How is my payment secured on Chrono Bit?',
          description: `   Chrono Bit employs cutting-edge blockchain technology to secure your crypto payments. Our decentralized payment system ensures a trustless and secure transaction process.
`,
        },
        {
          title: 'Can I track my order status on Chrono Bit?',
          description: `   Yes, once your order is confirmed on Discord, you will receive a unique tracking ID. Use this ID to monitor the status and location of your luxury watch as it makes its way to you.
`,
        },

        {
          title:
            ' Is there a warranty for the watches purchased on Chrono Bit?',
          description: `   Chrono Bit stands by the authenticity and quality of our watches. Chrono Bit is assured to deliver authentic timepieces as described to guarantee the condition and authenticity of your luxury timepiece.

`,
        },
        {
          title: 'How do I join the Chrono Bit Discord community?',
          description: `   To join our exclusive Discord community, visit our website and find the Discord invitation link. Engage with fellow watch enthusiasts, get updates, and participate in exclusive events.
`,
        },
        {
          title: 'Can I return or exchange a watch on Chrono Bit?',
          description: `   Our return and exchange policies are outlined in detail on our website. If you have any questions or concerns, reach out to our customer support through Discord for personalized assistance.
`,
        },
        {
          title: 'How does Chrono Bit contribute to the Web3 ethos?',
          description: `    Chrono Bit is dedicated to promoting decentralization, transparency, and trust within the luxury watch market. By embracing crypto payments and leveraging blockchain technology, we align with the principles of Web3 to redefine the future of luxury retail.
`,
        },
        {
          title: ' How can I become a Chrono Bit affiliate? ',
          description: `Our program is available for the public to apply although access is not guaranteed. All applications are reviewed before approval into this program. If you are interested in learning more kindly join our discord or review our application HERE for more information. 
`,
        },
        {
          title: ' How can I become a Chrono Bit affiliate? ',
          description: `Our program is available for the public to apply although access is not guaranteed. All applications are reviewed before approval into this program. If you are interested in learning more kindly join our discord or review our application <a href="https://forms.gle/7c91YmUB4LZcaWSo7" target="_blank">HERE</a> for more information.
 
`,
        },
      ],
    };
  },
};
</script>
