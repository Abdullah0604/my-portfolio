const ContactCard = ({ icon, title, value, link }) => {
  const content = (
    <div className="flex items-center gap-4 p-4 border border-transparent hover:border-[#4CAF50] rounded-lg transition-all cursor-pointer bg-[#161b22] hover:bg-[#1c2128] mb-8">
      <div className="text-[#4CAF50] text-xl">{icon}</div>
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default ContactCard;
