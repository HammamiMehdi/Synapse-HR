import TestimonialSection from '../components/Testimonial/Testimonials';

const testimonials = [
  {
    id: 1,
    name: 'AddInn',
    image: 'https://media.licdn.com/dms/image/C560BAQFmZNLdrC5MWw/company-logo_200_200/0/1678119197096?e=1687392000&v=beta&t=5TnZitevC6ecpZNTk8Q4D9i-Qei0_e0AOnY6LLM9CLc',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique velit vel lobortis.'
  },
  {
    id: 2,
    name: 'Biware',
    image: 'https://biware-consulting.com/wp-content/uploads/2019/11/white_logo.png.webp',
    text: 'Sed tristique, neque nec faucibus malesuada, erat augue bibendum ex, sed dictum augue mauris quis nulla.'
  },
  {
    id: 3,
    name: 'Charlie',
    image: 'https://placeimg.com/640/480/people',
    text: 'Vivamus vel risus sit amet enim aliquet malesuada. Curabitur in eleifend diam. Donec dapibus dolor eu libero ultricies, at porttitor nulla semper.'
  },
];

const App = () => {
  return (
    <div>
      <TestimonialSection testimonials={testimonials} />
    </div>
  );
};

export default App;
