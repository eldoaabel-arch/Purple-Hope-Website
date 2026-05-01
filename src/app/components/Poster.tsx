export default function JobPost() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .card {
          width: 480px;
          height: 480px;
          background: #111;
          border: 1px solid #222;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px;
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f5c518, #ff6b00);
        }

        .card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 20%, rgba(245,197,24,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f5c518;
          opacity: 0;
          animation: fadeIn 0.6s ease 0.2s forwards;
        }

        .headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px;
          line-height: 0.9;
          color: #fff;
          letter-spacing: 0.01em;
          opacity: 0;
          animation: fadeIn 0.6s ease 0.35s forwards;
        }

        .headline span {
          color: #f5c518;
        }

        .body {
          font-size: 13.5px;
          line-height: 1.65;
          color: #aaa;
          font-weight: 300;
          opacity: 0;
          animation: fadeIn 0.6s ease 0.5s forwards;
        }

        .body strong {
          color: #eee;
          font-weight: 500;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          animation: fadeIn 0.6s ease 0.65s forwards;
        }

        .cta {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #f5c518;
          padding: 10px 20px;
          display: inline-block;
        }

        .handle {
          font-size: 11px;
          color: #444;
          letter-spacing: 0.05em;
        }

        .corner {
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 60px;
          height: 60px;
          border-right: 1px solid #333;
          border-bottom: 1px solid #333;
          pointer-events: none;
        }
      `}</style>

      <div className="card">
        <div className="tag">Now Hiring &nbsp;·&nbsp; Commission Based</div>
        <div className="headline">
          MAKE<br /><span>MONEY</span><br />TALKING.
        </div>
        <div className="body">
          I run a <strong>web design business</strong> and need someone to help bring in clients.<br /><br />
          You call small businesses, pitch a website, and get paid when they sign.{' '}
          <strong>$75–100 per client.</strong> Flexible hours, work from anywhere — no experience needed
        </div>
        <div className="footer">
          <div className="cta">DM to apply</div>
          <div className="handle">Serious inquiries only    </div>
        </div>
      </div>
    </>
  );
}