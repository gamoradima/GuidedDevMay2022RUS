namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrMyRealtyServiceSchema

	/// <exclude/>
	public class UsrMyRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrMyRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrMyRealtyServiceSchema(UsrMyRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("458fec55-86ae-4afd-ad41-ced6ae37bf59");
			Name = "UsrMyRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5a2a9f1d-8bb9-4c18-a046-e54c7a7218de");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,208,131,0,0,217,189,110,229,8,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("458fec55-86ae-4afd-ad41-ced6ae37bf59"));
		}

		#endregion

	}

	#endregion

}

